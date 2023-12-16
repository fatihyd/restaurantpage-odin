function loadHomePage(container) {
    container.innerHTML = "";

    let homePageContainer = document.createElement("div");

    let homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Coolest Restaurant Ever";

    let homePageAboutContainer = document.createElement("div");
    let homePageAboutTitle = document.createElement("h2");
    let homePageAboutInfo = document.createElement("p");
    homePageAboutTitle.textContent = "About";
    homePageAboutInfo.textContent = "It's just the best!";
    homePageAboutContainer.append(homePageAboutTitle, homePageAboutInfo);

    let homePageHoursContainer = document.createElement("div");
    let homePageHoursTitle = document.createElement("h2");
    let homePageHoursInfo = document.createElement("p");
    homePageHoursTitle.textContent = "Hours";
    homePageHoursInfo.textContent = "24/7 all day every day forever!";
    homePageHoursContainer.append(homePageHoursTitle, homePageHoursInfo);

    homePageContainer.append(homePageTitle, homePageAboutContainer, homePageHoursContainer);
    container.appendChild(homePageContainer);
}

export { loadHomePage };