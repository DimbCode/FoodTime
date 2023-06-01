// Add Events Methods

let addEventsMethods = {

    addEvents(elements, event, callback) {
        elements?.forEach(element => {
            element?.addEventListener(event, callback);
        });
    },

}

export { addEventsMethods };