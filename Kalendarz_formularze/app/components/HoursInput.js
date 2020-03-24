class HoursInput {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let content;
        let inputHourElement = document.createElement('input');
        inputHourElement.id = params.id;
        inputHourElement.type = params.type;
        inputHourElement.maxLength = params.maxLength;
        inputHourElement.value = params.value;
        inputHourElement.required = true;
        parentNode.appendChild(inputHourElement);
        appObject.RegExRules(inputHourElement, function (value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 12);
        });
        inputHourElement.addEventListener('input', function () {
            document.querySelector('#radioBtn2').disabled = false;
            document.querySelector('#radioBtn2').checked = false;
            document.querySelector('#radioBtn1').disabled = true;
            document.querySelector('#radioBtn1').checked = true;
            content = parseInt(inputHourElement.value);
        });
        //onclick
        inputHourElement.addEventListener('click', function () {
            document.querySelector('#radioBtn2').disabled = false;
            document.querySelector('#radioBtn2').checked = false;
            document.querySelector('#radioBtn1').disabled = true;
            document.querySelector('#radioBtn1').checked = true;
        });
        //On Enter on Tab
        inputHourElement.onkeydown = function (e) {
            let key = e.which || e.charCode;
            if (key === 13 || key === 9) {
                if (content < 10 && content.length <= inputHourElement.maxLength) {
                    document.querySelector('#inputHours').value = '0' + document.querySelector('#inputHours').value.toString();
                }
            }
        };
        //On blur event 03.10.2019
        inputHourElement.onblur = function () {
            let value = inputHourElement.value;
            console.log('onblur');
            if (document.querySelector('#inputHours').value.toString() === '') {
                document.querySelector('#radioBtn2').disabled = true;
                document.getElementsByClassName('error')[0].style.visibility = 'visible';
            }
            if (content < 10) {
                if (value.length <= inputHourElement.maxLength - 1) {
                    document.querySelector('#inputHours').value = '0' + document.querySelector('#inputHours').value.toString();
                    console.log(content);
                    if (document.querySelector('#inputHours').value === '00') {
                        console.log(inputHourElement.value);
                        inputHourElement.value = '12';
                    }
                    // if( document.querySelector('#inputHours').value ==='00'|| document.querySelector('#inputHours').value ==='' ){

                }
            }
        };
    }
}

