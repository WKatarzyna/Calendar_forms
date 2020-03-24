class RadioBtn {
    constructor(params, parentNode) {
        this.AMView(params, parentNode);
    }
    AMView(params, parentNode) {
        let checkbox1 = document.createElement('input');
        checkbox1.type = params.type;
        checkbox1.disabled = params.disabled;
        checkbox1.name = params.name;
        checkbox1.value = params.value;
        checkbox1.id = params.id;
        checkbox1.checked = params.checked;
        parentNode.appendChild(checkbox1);
        appObject.HourHandler(checkbox1);
    }

}
