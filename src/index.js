import './styles.css';
import { homePage } from './home.js'

function navBar() {
    const div = document.createElement("div");
    div.classList.toggle("nav-bar");

    const home = document.createElement("button");
    home.classList.toggle("nav-button");
    home.textContent = "Home";

    const menu = document.createElement("button");
    home.classList.toggle("nav-button");
    menu.textContent = "Menu";

    const contact = document.createElement("button");
    home.classList.toggle("nav-button");
    contact.textContent = "Contact";

    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    
    return div;
}

document.getElementById("content").appendChild(navBar());
document.getElementById("content").appendChild(homePage());