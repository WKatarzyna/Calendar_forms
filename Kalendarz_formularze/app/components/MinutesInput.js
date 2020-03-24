class MinutesInput {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let content;
        let inputMinutesElement = document.createElement('input');
        inputMinutesElement.id = params.id;
        inputMinutesElement.type = params.type;
        inputMinutesElement.maxLength = params.maxLength;
        inputMinutesElement.value = params.value;
        inputMinutesElement.required = true;
        parentNode.appendChild(inputMinutesElement);
        appObject.RegExRules(inputMinutesElement, function (value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 55);
        });
        inputMinutesElement.addEventListener('input', function () {
            inputMinutesElement.classList.add('active');
            content = parseInt(inputMinutesElement.value);
            let value = inputMinutesElement.value;
            let array = value.split("");
            let pattern = /[6-9]/g;
            let newValue = parseInt(array[1]);
            if (!(newValue === 0) && !(newValue === 5) && newValue) {
                console.log(inputMinutesElement.value);
                inputMinutesElement.value = inputMinutesElement.value.substring(0, inputMinutesElement.value.length - 1) + '5';
            }
            if (newValue.toString().match(pattern)) {
                inputMinutesElement.value = parseInt(inputMinutesElement.value) + 5;
            }
        });
        //on keydown 03.10.2019
        inputMinutesElement.onkeydown = function (e) {
            let key = e.which || e.charCode;
            if (key === 13 || key === 9) {
                let content = parseInt(inputMinutesElement.value);
                console.log(content);
                if (content < 10 && content.length <= inputMinutesElement.maxLength) {
                    document.querySelector('#inputMinutes').value = '0' + document.querySelector('#inputMinutes').value.toString();
                    console.log(inputMinutesElement.value);
                }
            }
        };
        //On blur event 03.10.2019
        inputMinutesElement.onblur = function () {
            let value = inputMinutesElement.value;
            if (value == "") {
                console.log(value);
                document.getElementsByClassName('error')[0].style.visibility = 'visible';
                document.querySelector('#radioBtn2').disabled = true;
            }
            else if (content < 10) {
                if (value.length <= inputMinutesElement.maxLength - 1) {
                    document.querySelector('#inputMinutes').value = '0' + document.querySelector('#inputMinutes').value.toString();
                }
            }
        };
    }
}
;

