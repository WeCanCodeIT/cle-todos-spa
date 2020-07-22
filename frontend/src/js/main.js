import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Owners from "./components/Owners";
import Owner from "./components/Owner";
import apiActions from "./api/apiActions";
import TodoPostSection from "./components/TodoPostSection";
import TodoEdit from "./components/TodoEdit";

const appDiv = document.querySelector('.app');

//export default pageBuild();

export default function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
    navOwners();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer(){
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener('click', function(){
        appDiv.innerHTML = Home();
    })
}

function navTodos() {
    const todosButton = document.querySelector('.nav__todos');
    const todosEndpoint = "https://localhost:44393/api/todo";
    const todosCallback = todos => {
        appDiv.innerHTML = Todos(todos);
    }

    todosButton.addEventListener('click', function(){
        apiActions.getRequest(todosEndpoint, todosCallback);
    })
}

appDiv.addEventListener("click", function(){
    const addTodoSection = document.querySelector('.add-todo');
    if(event.target.classList.contains('add-todo__button')){
        apiActions.getRequest(`https://localhost:44393/api/owner`,
            owners => {
                console.log(owners)
            addTodoSection.innerHTML= TodoPostSection(owners);
        })
    }
})

appDiv.addEventListener("click", function(){
    if(event.target.classList.contains('add-todo__submit')){
        const todoName = event.target.parentElement.querySelector('.add-todo__todoName').value;
        const todoOwner = event.target.parentElement.querySelector('.add-todo__todoOwners').value;

        console.log(todoName);


        const requestBody = {
            Name: todoName,
            OwnerId: todoOwner
        }

        apiActions.postRequest(
            "https://localhost:44393/api/todo",
            requestBody,
            toDos => {
                console.log("Todos returned from back end");
                console.log(toDos);
                appDiv.innerHTML = Todos(toDos);
            }
        )
    }
})




function navOwners() {
    const ownersButton = document.querySelector('.nav__owners');
    const ownersEndpoint = 'https://localhost:44393/api/owner';
    const ownersCallback = owners => {
        appDiv.innerHTML = Owners(owners);
        ownerNameButton();
    }

    ownersButton.addEventListener('click', function(){
        apiActions.getRequest(ownersEndpoint, ownersCallback);
    })
}

function ownerNameButton() {
    const ownerNameElements = document.querySelectorAll('.owner__name');
    ownerNameElements.forEach(element => {
        element.addEventListener('click', function(){
            const ownerId = element.id;
            console.log(`owner name clicked, owner id ${ownerId}`)
            fetch(`https://localhost:44393/api/owner/${ownerId}`)
            .then(response => response.json())
            .then(owner => {
                appDiv.innerHTML = Owner(owner);
            })
            .catch(err => console.log(err))
        })
    })
}

// When the user clicks the submit Todo button from the Owner component, 
// we will call the post fetch request
// and send the new values for Todo Name and Owner id to the backend
// and then redisplay the Owner component 
appDiv.addEventListener('click', function(){
    if(event.target.classList.contains('owner__add-todo__submit')){
        const todoName = event.target.parentElement.querySelector('.owner__add-todo__name').value;
        const ownerId = event.target.id;

        console.log(`owner id: ${ownerId}, todo name: ${todoName}`);

        const requestBody = {
            Name: todoName,
            OwnerId: ownerId
        }

        const ownerCallback = () => {
            apiActions.getRequest(
                `https://localhost:44393/api/owner/${ownerId}`,
                owner => {
                    console.log(owner);
                    appDiv.innerHTML = Owner(owner);
                })
        }

        apiActions.postRequest(
            `https://localhost:44393/api/todo`,
            requestBody,
            ownerCallback
        )
    }
})

// When the user clicks the delete button, we will call the delete fetch request
// and then redisplay the Todos component
appDiv.addEventListener('click', function(){
    if(event.target.classList.contains('todo-item__delete')){
        const todoId = event.target.parentElement.querySelector('.todo-item__id').value;
        console.log(todoId);

        apiActions.deleteRequest(
            `https://localhost:44393/api/todo/${todoId}`,
            todos => {
                appDiv.innerHTML = Todos(todos);
            }
        )
    }
})

// When the user clicks the edit button, we will call the get fetch request
// to get the entire Todo object
// and then display the Todo object in the TodoEdit form
appDiv.addEventListener("click", function(){
    if(event.target.classList.contains('todo-item__edit')){
        const todoId = event.target.parentElement.querySelector('.todo-item__id').value;
        apiActions.getRequest(
            `https://localhost:44393/api/todo/${todoId}`,
            todoEdit => {
                console.log(todoEdit);
                appDiv.innerHTML = TodoEdit(todoEdit);
            }
        )
    }
})

// When the user clicks the Save Changes button on the TodoEdit form
// we will capture the data from the TodoEdit form
// and call the put fetch request
// and then redisplay the Todos component with the updated list of todos
appDiv.addEventListener("click", function(){
    if(event.target.classList.contains('edit-todo__submit')){
        const todoId = event.target.parentElement.querySelector('.edit-todo__id').value;
        const todoName = event.target.parentElement.querySelector('.edit-todo__name').value;
        const todoOwner = event.target.parentElement.querySelector('.edit-todo__owner').value;

        const todoData = {
            id: todoId,
            name: todoName,
            ownerId: todoOwner
        };

        apiActions.putRequest(
            `https://localhost:44393/api/todo/${todoId}`,
            todoData,
            todos => {
                console.log(todos);
                appDiv.innerHTML = Todos(todos);
            }
        )
    }
})