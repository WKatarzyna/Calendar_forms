class ValidationButtons {
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
            let newTask = document.getElementById('meetingTitle');
            let errorTitle = document.getElementById('errorTitle');
            let newPlace = document.getElementById('placeInput');
            let errorPlace = document.getElementById('errorPlace');
            let startTask = document.getElementById('taskStart');
            let startDateError = document.getElementById('errorDate');
            // let taskEnd = document.getElementById('endInput');
            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
                    if (newTask.value == "") {
                        console.log(startTask.value);
                        errorTitle.style.visibility = 'visible';
                        newTask.classList.add('empty');
                        newTask.classList.remove('active');
                        newTask.classList.remove('validated');
                    }
                    else {
                        errorTitle.style.visibility = 'hidden';
                        newTask.classList.remove('empty');
                        newTask.classList.remove('active');
                        newTask.classList.add('validated');
                    }
                    if (newPlace.value == "") {
                        errorPlace.style.visibility = 'visible';
                        newPlace.classList.add('empty');
                        newPlace.classList.remove('active');
                        newPlace.classList.remove('validated');
                    }
                    else {
                        errorPlace.style.visibility = 'hidden';
                        newPlace.classList.remove('empty');
                        newPlace.classList.remove('active');
                        newPlace.classList.add('validated');
                    }
                    if (startTask.value == "") {
                        startDateError.style.visibility = 'visible';
                        startTask.classList.add('empty');
                        startTask.classList.remove('active');
                        startTask.classList.remove('validated');
                    }
                    else {
                        startDateError.style.visibility = 'hidden';
                        startTask.classList.remove('empty');
                        startTask.classList.remove('active');
                        startTask.classList.add('validated');
                    }
                    return false;
                }
            }
            form.submit();
        });
        cancelBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let placeholder = document.querySelector('.container');
            while (placeholder.firstChild) {
                placeholder.firstChild.remove();
            }
            page.CreateMainPage(placeholder);
            appObject.CreatePageObject();
            appObject.CreatePrevMonthTable();
            appObject.CreateNextMonthsTable();
            appObject.TaskPanel();
            let calendarTable = document.querySelector('.holder');
            calendarTable.classList.remove('holder');
        });
    }
}



