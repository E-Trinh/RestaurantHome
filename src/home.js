import soupImg from "./2048px-Tomato_Pumpkin_Soup_(32881733498).jpg";

function homePage() {
    const home = document.createElement("div");
    home.classList.toggle("home");

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

    const headerText = document.createElement("h1");
    headerText.textContent = "Healthy Soup Soupermarket";

    const subText = document.createElement("p");
    subText.textContent = "Delivering fresh soup to you everyday!";

    sideImage.appendChild(image);
    sideImage.appendChild(source);

    header.appendChild(headerText);
    header.appendChild(subText);

    home.appendChild(sideImage);
    home.appendChild(header);
    
    return home;
}

export {homePage};