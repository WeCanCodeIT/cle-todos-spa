import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";

const appDiv = document.querySelector('.app');

pageBuild();

function pageBuild(){
    header();
    footer();
    navHome();
    navTodos();
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
        // appDiv.innerHTML = Todos(todos);
    })
}