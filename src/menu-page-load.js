function loadMenuPage() {
    let menuPageContainer = document.createElement("div");

    let menuPageTitle = document.createElement("h1");
    menuPageTitle.textContent = "Coolest Menu Ever";

    let iceCreamContainer = document.createElement("div");
    let iceCreamTitle = document.createElement("h2");
    iceCreamTitle.textContent = "Coldest Ice Cream";
    let iceCreamImage = document.createElement("img");
    iceCreamImage.src = "https://images.emilydrawing.com/wp-content/uploads/2022/05/How-To-Draw-an-Ice-Cream-Cone-Steps-10.jpg";
    iceCreamContainer.append(iceCreamTitle, iceCreamImage);

    menuPageContainer.append(menuPageTitle, iceCreamContainer);
}

export { loadMenuPage };