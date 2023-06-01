// Imports

import { dropDownMethods } from "./modules/drop-down-methods.js";
import { spoilersMethods } from "./modules/spoilers-methods.js";
import { tabsMethods } from "./modules/tabs-methods.js";
import { addEventsMethods } from "./modules/add-events-methods.js";
import { modalMethods } from "./modules/modal-methods.js";

// Drop-down Variables

const dropDownMenu = document.querySelector(".header__drop-down");
const toggleBtn = document.querySelector(".header__link--drop-down");
const dropDownMenuHidden = document.querySelector(".burger-menu__drop-down");
const toggleBtnHidden = document.querySelector(".burger-menu__link--drop-down");

// Spoilers Variables

const spoilerButtons = document.querySelectorAll(".question__btn");

// Tabs Variables

const tabs = document.querySelectorAll(".questions__spoilers");
const tabButtons = document.querySelectorAll(".questions__btn");

// Modal Variables

const modalWindow = document.querySelector(".burger-menu__hidden-section");
const openModalBtn = document.querySelector(".burger-menu__btn");
const hiddenModalBtn = document.querySelector(".burger-menu__skip-btn");

// Event Listeners

toggleBtn.addEventListener("click", (event) => {

    const clickedBtn = event.currentTarget;

    dropDownMethods.toggleSpoiler(dropDownMenu, "hidden");
    dropDownMethods.toggleArrow(clickedBtn, "header__link--active");

});

toggleBtnHidden.addEventListener("click", (event) => {

    const clickedBtn = event.currentTarget;

    dropDownMethods.toggleSpoiler(dropDownMenuHidden, "hidden");
    dropDownMethods.toggleArrow(clickedBtn, "burger-menu__link--active");

});

addEventsMethods.addEvents(spoilerButtons, "click", (event) => {

    const clickedBtn = event.currentTarget;
    const spoiler = clickedBtn.parentElement.nextElementSibling;

    spoilersMethods.toggleSpoiler(spoiler, "none");
    spoilersMethods.toggleArrow(clickedBtn, "question__btn--active");

});

addEventsMethods.addEvents(tabButtons, "click", (event) => {

    const clickedBtn = event.currentTarget;
    const currentTab = tabs[Array.from(tabButtons).findIndex(item => item == clickedBtn)];

    tabsMethods.setActiveBtn(tabButtons, clickedBtn, "questions__btn--active");
    tabsMethods.tabsToggle(tabs, currentTab);

});

openModalBtn.addEventListener("click", () => {
    modalMethods.openModalWindow(modalWindow);
});

hiddenModalBtn.addEventListener("click", () => {
    modalMethods.hiddenModalWindow(modalWindow);
});