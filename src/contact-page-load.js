function loadContactPage(container) {
    container.innerHTML = "";

    let contactPageContainer = document.createElement("div");

    let contactPageTitle = document.createElement("h1");
    contactPageTitle.textContent = "Don't call us at night";

    let contactPageInfo = document.createElement("p");
    contactPageInfo.textContent = "+12345678"

    contactPageContainer.append(contactPageTitle, contactPageInfo);
    container.appendChild(contactPageContainer);
}

export { loadContactPage };