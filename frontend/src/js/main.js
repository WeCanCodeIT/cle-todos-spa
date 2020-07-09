import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todos from "./components/Todos";

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
        document.querySelector('.app').innerHTML = Home();
    })
}

function navTodos() {
    const todosButton = document.querySelector('.nav__todos');
    todosButton.addEventListener('click', function(){
        document.querySelector('.app').innerHTML = Todos(todos);
    })
}