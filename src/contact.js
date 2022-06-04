import soupImg from "./2048px-Tomato_Pumpkin_Soup_(32881733498).jpg";

function contactPage() {
    const contact = document.createElement("div");
    contact.classList.toggle("home");

    const sideImage = document.createElement("div");
    sideImage.classList.toggle("side-image");

    const image = document.createElement("img");
    image.src = soupImg;

    const sourceLink = document.createElement("a");
    sourceLink.href = "https://commons.wikimedia.org/wiki/File:Tomato_Pumpkin_Soup_(32881733498).jpg";
    sourceLink.textContent = "Ella Olsson from Stockholm, Sweden";
    
    const imageLicenseLink = document.createElement("a");
    imageLicenseLink.href = "https://creativecommons.org/licenses/by/2.0";
    imageLicenseLink.textContent = "CC BY 2.0";

    const source = document.createElement("p");
    const textPartOne = document.createTextNode(", ")
    const textPartTwo = document.createTextNode(", via Wikimedia Commons")
    source.appendChild(sourceLink);
    source.appendChild(textPartOne);
    source.appendChild(imageLicenseLink);
    source.appendChild(textPartTwo);

    const header = document.createElement("div");
    header.classList.toggle("header");

    const contactText = document.createElement("h1");
    contactText.textContent = "Contact Us!"

    const phone = document.createElement("h3");
    phone.textContent = "Phone: (XXX)XXX-XXXX";

    const address = document.createElement("h3");
    address.textContent = "Address: 0000 No Address Street";

    const email = document.createElement("h3");
    email.textContent = "Email: no-mail@mail"

    sideImage.appendChild(image);
    sideImage.appendChild(source);

    header.appendChild(contactText);
    header.appendChild(phone);
    header.appendChild(address);
    header.appendChild(email);

    contact.appendChild(sideImage);
    contact.appendChild(header);

    return contact;
}

export {contactPage }