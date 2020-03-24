class Place {
    constructor(params, parent) {
        this.Build(params, parent);
    }
    Build(params, parent) {
        let place = document.createElement('input');
        place.id = params.id;
        place.type = params.type;
        place.classList = params.class;
        place.autocomplete = params.autocomplete;
        place.placeholder = params.placeholder;
        place.setAttribute("required", 'true');
        parent.appendChild(place);
        appObject.RegExRules(place, function (value) {
            return /^[A-Za-z_ ]*$/i.test(value);
        });
        let errorField = document.createElement('div');
        parent.appendChild(errorField);
        errorField.classList.add('errorField');
        errorField.id = "errorPlace";
        errorField.textContent = "*Pole wymagane";
        //on keydown 04.10.2019
        let value;
        place.onkeydown = function (e) {
            let key = e.which || e.charCode;
            value = place.value;
            if (key === 13 || key === 9) {
                if (value == "") {
                    errorField.style.visibility = 'visible';
                    place.classList.add('empty');
                    place.classList.remove('active');
                }
                else {
                    errorField.style.visibility = 'hidden';
                    place.classList.remove('empty');
                }
            }
        };
        //onblur 04.10.2019
        place.onblur = function () {
            value = place.value;
            if (value == "") {
                errorField.style.visibility = 'visible';
                place.classList.add('empty');
                place.classList.remove('active');
                place.classList.remove('validated');
            }
            else {
                errorField.style.visibility = 'hidden';
                place.classList.remove('empty');
                place.classList.add('validated');
            }
        };
        place.oninput = function () {
            errorField.style.visibility = 'hidden';
            place.classList.add('active');
            place.value = place.value.charAt(0).toUpperCase() + place.value.slice(1);
        };
    }
}
;






