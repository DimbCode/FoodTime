// Imports

import { dropDownMethods } from "./modules/drop-down-methods.js";
import { spoilersMethods } from "./modules/spoilers-methods.js";

// Drop-down Variables

const dropDownMenu = document.querySelector(".header__drop-down");
const toggleBtn = document.querySelector(".header__link--drop-down");

// Spoilers Variables

const spoilerButtons = document.querySelectorAll(".question__btn");

// Event Listeners

toggleBtn.addEventListener("click", (event) => {

    const clickedBtn = event.currentTarget;

    dropDownMethods.toggleSpoiler(dropDownMenu, "hidden");
    dropDownMethods.toggleArrow(clickedBtn, "header__link--active");

});

spoilerButtons.forEach(item => {

    item.addEventListener("click", (event) => {

        const clickedBtn = event.currentTarget;
        const spoiler = clickedBtn.parentElement.nextElementSibling;

        spoilersMethods.toggleSpoiler(spoiler, "none");
        spoilersMethods.toggleArrow(clickedBtn, "question__btn--active");

    });

});