
class TaskName {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let newTask = document.createElement('input');
        newTask.type = params.type;
        newTask.id = params.id;
        newTask.classList = params.class;
        newTask.placeholder = params.placeholder;
        newTask.pattern = params.pattern;
        newTask.autocomplete = params.autocomplete;
        newTask.required = params.required;
        parentNode.appendChild(newTask);
        appObject.RegExRules(newTask, function (value) {
            return /^[A-Za-z_ ]*$/i.test(value);
        });
        let errorField = document.createElement('div');
        parentNode.appendChild(errorField);
        errorField.classList.add('errorField');
        errorField.id = 'errorTitle';
        errorField.textContent = "*Pole wymagane";
        //on blur 03.10.2019
        //on keydown 03.10.2019
        let value;
        newTask.onkeydown = function (e) {
            let key = e.which || e.charCode;
            value = newTask.value;
            if (key === 13 || key === 9) {
                if (value == "") {
                    errorField.style.visibility = 'visible';
                    newTask.classList.add('empty');
                    newTask.classList.remove('active');
                    newTask.classList.remove('validated');
                }
                else {
                    errorField.style.visibility = 'hidden';
                    newTask.classList.remove('empty');
                    newTask.classList.remove('active');
                    newTask.classList.add('validated');
                }
            }
        };
        newTask.onblur = function () {
            value = newTask.value;
            if (value == "") {
                errorField.style.visibility = 'visible';
                newTask.classList.add('empty');
                newTask.classList.remove('active');
                newTask.classList.remove('validated');
            }
            else {
                errorField.style.visibility = 'hidden';
                newTask.classList.remove('empty');
                newTask.classList.add('validated');
            }
        };
        //onInput 03.10.2019
        newTask.oninput = function (e) {
            errorField.style.visibility = 'hidden';
            newTask.classList.add('active');
            newTask.value = newTask.value.charAt(0).toUpperCase() + newTask.value.slice(1);
        };
    }
}
;





