import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

const appDiv = document.getElementById("app");
const todoURL = "https://localhost:44393/api/Todo";

export default() => {
    setupHeader();
    setupFooter();
    navTodos();
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
        });
    });
}