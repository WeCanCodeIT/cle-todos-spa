// List of imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Todos from './components/Todos';
import apiActions from './api/apiActions';

pageBuild();

function pageBuild(){
    header();
    footer();
    navHome();
    navTodo();
}

function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
}

function footer(){
    const footer = document.querySelector('#footer');
    footer.innerHTML = Footer();
}

function navHome(){
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener("click", function() {
        document.querySelector("#app").innerHTML = Home();
    });
}

function navTodo(){
    const todosButton = document.querySelector(".nav__todos");
    todosButton.addEventListener("click", function() {
        alert('you clicked the todo button');
      document.querySelector('#app').innerHTML = Todos(todos);
      });
}