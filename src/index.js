import './styles.css';
import { homePage } from './home.js'

function navBar() {
    const div = document.createElement("div");
    div.classList.toggle("nav-bar");

    const home = document.createElement("button");
    home.classList.toggle("nav-button");
    home.textContent = "Home";
    home.addEventListener("click", () => {
        clearContent();
    });

    const menu = document.createElement("button");
    menu.classList.toggle("nav-button");
    menu.textContent = "Menu";

    const contact = document.createElement("button");
    contact.classList.toggle("nav-button");
    contact.textContent = "Contact";

    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    
    return div;
}

function clearContent() {
    document.querySelector(".main-panel").innerText = "";
}

document.getElementById("content").appendChild(navBar());
document.getElementById("content").appendChild(homePage());