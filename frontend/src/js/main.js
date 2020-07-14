import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Owners from "./components/Owners";
import Owner from "./components/Owner";

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
    todosButton.addEventListener('click', function(){
        fetch("https://localhost:44393/api/todo")
        .then(response => response.json())
        .then(todos => {
            appDiv.innerHTML = Todos(todos);

        })
        .catch(err => console.log(err))
    })
}

function navOwners() {
    const ownersButton = document.querySelector('.nav__owners');
    ownersButton.addEventListener('click', function(){
        fetch('https://localhost:44393/api/owner')
        .then(response => response.json())
        .then(owners => {
            appDiv.innerHTML = Owners(owners);
            ownerNameButton();
        })
        .catch(err => console.log(err))
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