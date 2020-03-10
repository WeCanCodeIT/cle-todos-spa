// document.querySelector('#app').innerText = "Hello World"
// header();

// List of imports
import Header from './components/Header';
import Footer from './components/Footer';

pageBuild();

function pageBuild(){
    header();
    footer();
}

function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
    // header.innerHTML =
    // `<nav class='nav__header'>
    //      <ul>
    //          <li class='nav__home'>Home</li>
    //          <li class='nav__values'>Values</li>
    //          <li class='nav__todos'>ToDos</li>
    //     </ul>
    // </nav>` 
}

function footer(){
    const footer = document.querySelector('#footer');
    footer.innerHTML = Footer();
}