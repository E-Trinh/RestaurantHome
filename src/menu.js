function menuPage() {
    const menu = document.createElement("div");
    menu.classList.toggle("menu");

    const vegetable = document.createElement("div");
    const vegetableHeader = document.createElement("h1");
    const vegetableText = document.createElement("p");
    vegetableHeader.textContent = "Vegatable Soup";
    vegetableText.textContent = "A soup made using vegetables";
    vegetable.classList.toggle("menu-item");
    vegetable.appendChild(vegetableHeader);
    vegetable.appendChild(vegetableText);

    const beef = document.createElement("div");
    const beefHeader = document.createElement("h1");
    const beefText = document.createElement("p");
    beefHeader.textContent = "Beef Stew";
    beefText.textContent = "A soup made with beef cooked with vegetables";
    beef.classList.toggle("menu-item");
    beef.appendChild(beefHeader);
    beef.appendChild(beefText);

    const tomato = document.createElement("div");
    const tomatoHeader = document.createElement("h1");
    const tomatoText = document.createElement("p");
    tomatoHeader.textContent = "Tomato Soup";
    tomatoText.textContent = "A soup made with a lot of tomatoes";
    tomato.classList.toggle("menu-item");
    tomato.appendChild(tomatoHeader);
    tomato.appendChild(tomatoText);

    const chickenNoodle = document.createElement("div");
    const chickenNoodleHeader = document.createElement("h1");
    const chickenNoodleText = document.createElement("p");
    chickenNoodleHeader.textContent = "Chicken Noodle Soup";
    chickenNoodleText.textContent = "A soup made with chicken, noodles alongside vegetables";
    chickenNoodle.classList.toggle("menu-item");
    chickenNoodle.appendChild(chickenNoodleHeader);
    chickenNoodle.appendChild(chickenNoodleText);

    menu.appendChild(vegetable);
    menu.appendChild(beef);
    menu.appendChild(tomato);
    menu.appendChild(chickenNoodle);

    return menu;
}

export { menuPage }