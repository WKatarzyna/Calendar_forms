class ListElement {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let newInput = document.createElement("input");
        newInput.placeholder = params.placeholder;
        newInput.classList = params.class;
        parentNode.appendChild(newInput);
    }
}















