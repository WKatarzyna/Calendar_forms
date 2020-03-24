class TextArea {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let agendaDetails = document.createElement('textarea');
        agendaDetails.id = params.id;
        agendaDetails.classList = params.class;
        agendaDetails.placeholder = 'Wprowadź uwagi na temat spotkania';
        parentNode.appendChild(agendaDetails);

        Object.defineProperties(agendaDetails, {
            'property1': {
                writable: true
            }
        });

        agendaDetails.oninput = function () {
            agendaDetails.classList.add('active');
        };
        agendaDetails.onkeyup = function (e) {
            let key = e.which || e.charCode;
            if (key === 13 || key === 9) {
                agendaDetails.classList.remove('active');
            }
        };
    }
}


