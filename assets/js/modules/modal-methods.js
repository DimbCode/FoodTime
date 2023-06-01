// Modal Methods

let modalMethods = {

    openModalWindow(window) {
        window.classList.remove("hidden");
    },

    hiddenModalWindow(window) {
        window.classList.add("hidden");
    },

}

export { modalMethods };