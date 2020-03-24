class StartDate {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let taskStartDate = document.createElement('input');
        taskStartDate.id = params.id;
        taskStartDate.type = params.type;
        taskStartDate.required = params.required;
        taskStartDate.classList = params.class;
        taskStartDate.valueAsDate = new Date();
        parentNode.appendChild(taskStartDate);
        let errorField = document.createElement('div');
        parentNode.appendChild(errorField);
        errorField.classList.add('errorField');
        errorField.id = 'errorDate';
        errorField.textContent = "*Pole wymagane";
        taskStartDate.onchange = function () {
            let changeInput = document.querySelector('#endInput');
            changeInput.value = taskStartDate.value;
            changeInput.setAttribute("min", taskStartDate.value);
        };
    }
}



