// Tabs Methods

let tabsMethods = {

    setActiveBtn(buttons, btn, cl) {
        buttons.forEach(item => {
            item.classList.remove(cl);
        });

        btn.classList.add(cl);
    },

    tabsToggle(tabs, tab) {
        tabs.forEach(item => {
            item.classList.add("hidden");
        });

        tab.classList.remove("hidden");
    },

}

export { tabsMethods };