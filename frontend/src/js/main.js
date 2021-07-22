import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import Owners from "./components/Owners";
import Owner from "./components/Owner";

const appDiv = document.getElementById("app");
const todoURL = "https://localhost:44393/api/Todo";
const ownerURL = "https://localhost:44393/api/Owner";
const todaysDate = new Date(Date.now());

export default() => {
    setupHeader();
    setupFooter();
    navTodos();
    navOwners();
}

function setupHeader(){
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
}

function setupFooter(){
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
}

function navTodos(){
    const todosNavButton = document.querySelector(".nav_todos");
    todosNavButton.addEventListener("click", function(){
        fetch(todoURL).then(response => response.json()).then(data => {
            console.log(data);
            appDiv.innerHTML = Todos(data);
            fillOwners();
            AddTodo();
        });
    });
}

function navOwners(){
    const ownersNavButton = document.querySelector(".nav_owners");
    ownersNavButton.addEventListener('click', function(){
        fetch(ownerURL).then(response => response.json()).then(data => {
            appDiv.innerHTML = Owners(data);
        });
    });
}

function AddTodo(){
    const saveTodoButton = document.getElementById("saveTodoBtn");
    saveTodoButton.addEventListener('click', function(){
        let todoName = document.getElementById("todoName").value;
        let ownerId = document.getElementById("owners").value;
        //2021-07-22
        let currentDate = todaysDate.getFullYear() + '-' + (todaysDate.getMonth()+1) + '-' + todaysDate.getDate();
        let dueDate = todaysDate.getFullYear() + '-' + (todaysDate.getMonth()+1) + '-' + (todaysDate.getDate()+5);

        const requestBody = {
            Name: todoName,
            OwnerId: ownerId,
            CreatedOn: currentDate,
            DueBy: dueDate,
            IsDone: false
        }

        if(ownerId != 'Select an Owner'){
            fetch(todoURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Owner(data);
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select a owner first.';
        }

    });
}

function fillOwners(){
    let dropdown = document.getElementById("owners");
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select an Owner";
    defaultOption.disabled = 'disabled';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    fetch(ownerURL).then(response => response.json()).then(data => {
        let option;
        data.forEach(function(owner){
            option = document.createElement('option');
            option.text = owner.name;
            option.value = owner.id;
            dropdown.add(option);
        });
    });
}