class EndDate {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let taskEndDate = document.createElement('input');
        taskEndDate.id = params.id;
        taskEndDate.required = params.required;
        taskEndDate.classList = params.class;
        taskEndDate.type = params.type;
        taskEndDate.valueAsDate = params.value;
        taskEndDate.min = params.min;
        let errorField = document.createElement('div');
        parentNode.appendChild(errorField);
        errorField.classList.add('errorField');
        errorField.id = 'errorEndDate';
        errorField.textContent = "*Pole wymagane";
        parentNode.appendChild(taskEndDate);
    }
}



