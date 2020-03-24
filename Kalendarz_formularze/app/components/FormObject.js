class FormArea {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let meetingForm = document.createElement('form');
        meetingForm.id = params.id;
        meetingForm.name = params.name;
        meetingForm.autocomplete = params.autocomplete;
        meetingForm.action = params.action;
        meetingForm.setAttribute('novalidate', `${true}`);
        parentNode.appendChild(meetingForm);
        meetingForm.onkeypress = function (e) {
            let key = e.which || e.keyCode || 0;
            if (key === 13) {
                e.preventDefault();
            }
        };
        meetingForm.onkeyup = function (e) {
            let key = e.which || e.keyCode || 0;
            if (key === 13) {
                let focusableElements = document.querySelectorAll('input');
                let index = Array.prototype.indexOf.call(focusableElements, document.activeElement);
                if (e.shiftKey)
                    focus(focusableElements, index - 1);
                else
                    focus(focusableElements, index + 1);
                e.preventDefault();
            }

            function focus(elements, index) {
                if (elements[index])
                    elements[index].focus();
            }
        };
    }
}


