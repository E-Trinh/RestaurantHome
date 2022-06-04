import './styles.css';
import { homePage } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

function navBar() {
    const div = document.createElement("div");
    div.classList.toggle("nav-bar");

    const home = document.createElement("button");
    home.classList.toggle("nav-button");
    home.textContent = "Home";
    home.addEventListener("click", () => {
        clearContent();
        document.querySelector(".main-panel").appendChild(homePage());
    });

    const menu = document.createElement("button");
    menu.classList.toggle("nav-button");
    menu.textContent = "Menu";
    menu.addEventListener("click", () => {
        clearContent();
        document.querySelector(".main-panel").appendChild(menu());
    });

    const contact = document.createElement("button");
    contact.classList.toggle("nav-button");
    contact.textContent = "Contact";
    contact.addEventListener("click", () => {
        clearContent();
        document.querySelector(".main-panel").appendChild(contact());
    });

    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    
    return div;
}

function clearContent() {
    document.querySelector(".main-panel").innerText = "";
}

document.getElementById("content").appendChild(navBar());
const main = document.createElement("div");
main.classList.toggle("main-panel");
document.getElementById("content").appendChild(main);
document.querySelector(".main-panel").appendChild(homePage());