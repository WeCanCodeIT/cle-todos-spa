// List of imports
import Header from './components/Header';
import Footer from './components/Footer';
import apiActions from './api/apiActions';

pageBuild();

function pageBuild(){
    header();
    footer();
}

function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
}

function footer(){
    const footer = document.querySelector('#footer');
    footer.innerHTML = Footer();
}

