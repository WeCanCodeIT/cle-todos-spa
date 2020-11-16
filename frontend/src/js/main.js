import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Todos from './components/Todos';
import Owners from './components/Owners';
import Owner from './components/Owner';

export default () => {
    // document.querySelector('.app').innerText = "Hello"
    header();
    footer();
    navHome();
    navTodos();
    navOwners();
}

const appDiv = document.querySelector('.app');

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer(){
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navHome(){
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener('click', function(){
        appDiv.innerHTML = Home();
    })
}

function navTodos(){
    const todosButton = document.querySelector('.nav__todos');
    todosButton.addEventListener('click', function(){
        fetch("https://localhost:44393/api/todo")
            .then(response => response.json())
            .then(todos => {
                appDiv.innerHTML = Todos(todos);
                todosInspire();
            })
            .catch(err => console.log(err))
    })
}

function navOwners(){
    const ownersButton = document.querySelector('.nav__owners');
    ownersButton.addEventListener('click', function(){
        // fetch Owners from back end
        fetch("https://localhost:44393/api/owner")
        .then(response => response.json())
        .then(owners => {
            appDiv.innerHTML = Owners(owners);
            ownerNameButton();
        })
        .catch(error => console.log(error))
    })
}

function ownerNameButton(){
    const ownerNameElements = document.querySelectorAll('.owner__name');
    ownerNameElements.forEach(element => {
        element.addEventListener('click', function(){
            const ownerId = element.id;
            console.log(`clicked owner id: ${ownerId}`);
            fetch(`https://localhost:44393/api/owner/${ownerId}`)
            .then(response => response.json())
            .then(owner => {
                appDiv.innerHTML = Owner(owner);
            })
            .catch(err => console.log(err))
        })
    })
}

function todosInspire(){
    const inspireButton = document.querySelector('.todos__inspire');
    inspireButton.addEventListener('click', function(){
        console.log("clicked the inspire button")
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
            .then(response => response.json())
            .then(quote => {
                inspireButton.remove();
                const quoteElement = document.createElement('h3');
                quoteElement.innerText = `${quote}`;
                appDiv.appendChild(quoteElement);
            })
            .catch(err => console.log(err))
    })
}