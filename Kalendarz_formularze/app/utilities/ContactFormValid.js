class ContactFormValidation {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let acceptBtn = document.createElement('button');
        acceptBtn.textContent = params.textContent1;
        acceptBtn.type = params.type;
        acceptBtn.id = params.id1;
        parentNode.appendChild(acceptBtn);
        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = params.textContent2;
        cancelBtn.id = params.id2;
        parentNode.appendChild(cancelBtn);
        this.EventHandler(acceptBtn, cancelBtn);
    }
    EventHandler(acceptBtn, cancelBtn) {

        acceptBtn.addEventListener('click', function () {
            let form = document.getElementById('pageform');
            let newName = document.getElementById('nameInput');
            let emailInput = document.getElementById('emailInput');
            // let taskEnd = document.getElementById('endInput');
            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
                    if (newName.value == "") {
                        console.log(newName.value)

                        // errorTitle.style.visibility = 'visible';
                        newName.classList.add('empty');
                        newName.classList.remove('active');
                        newName.classList.remove('validated');


                    }
                    else {
                        newName.classList.add('validated');

                    }
                    if (emailInput.value == "") {
                        emailInput.classList.add('empty');
                        emailInput.classList.remove('active');
                        emailInput.classList.remove('validated');
                    }
                    else {
                        emailInput.classList.add('validated');
                    }




                    return false;
                }
            }
            placeholder.classList.remove('popUp');
            page.CreateContactPanel();

        });
        cancelBtn.addEventListener('click', function (e) {
            placeholder.classList.remove('popUp');
            while (placeholder.firstChild) {
                placeholder.firstChild.remove();
            }
            page.CreateContactPanel();
        });
    }
}

