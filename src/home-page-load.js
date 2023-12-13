function loadHomePage() {
    let homePageContainer = document.createElement("div");

    let homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Coolest Restaurant Ever";

    let homePageAbout = document.createElement("div");
    let homePageAboutTitle = document.createElement("h2");
    homePageAboutTitle.textContent = "About";
    homePageAbout.textContent = "It's just the best!";
    homePageAbout.append(homePageAboutTitle);

    let homePageHours = document.createElement("div");
    let homePageHoursTitle = document.createElement("h2");
    homePageHoursTitle.textContent = "Hours";
    homePageHours.textContent = "24/7 all day every day forever!";
    homePageHours.append(homePageHoursTitle);

    let homePageLocation = document.createElement("div");
    let homePageLocationTitle = document.createElement("h2");
    homePageLocationTitle.textContent = "Location";
    homePageLocation.textContent = "Wherever you are now!";
    homePageLocation.append(homePageLocationTitle);

    homePageContainer.append(homePageTitle, homePageAbout, homePageHours, homePageLocation);
}

export { loadHomePage };