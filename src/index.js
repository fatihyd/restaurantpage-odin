import { loadHomePage } from "./home-page-load";
import { loadMenuPage } from "./menu-page-load";
import { loadContactPage } from "./contact-page-load";

let body = document.querySelector("body");
let contentDiv = document.querySelector("#content");

let topBarContainer = document.createElement("div");
let homeButton = document.createElement("button");
homeButton.id = "home-button";
homeButton.textContent = "Home"
let menuButton = document.createElement("button");
menuButton.id = "menu-button";
menuButton.textContent = "Menu";
let contactButton = document.createElement("button");
contactButton.id = "contact-button";
contactButton.textContent = "Contact";
topBarContainer.append(homeButton, menuButton, contactButton);

body.insertBefore(topBarContainer, contentDiv);

loadHomePage(contentDiv);

document.addEventListener("click", function (event) {
    if (event.target.id === "home-button") {
        loadHomePage(contentDiv);
    } else if (event.target.id === "menu-button") {
        loadMenuPage(contentDiv);
    } else if (event.target.id === "contact-button") {
        loadContactPage(contentDiv);
    }
})