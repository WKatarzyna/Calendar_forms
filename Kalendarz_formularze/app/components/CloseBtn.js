class CloseBtn {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let closeBtn = document.createElement('div');
        closeBtn.classList = params.class;
        closeBtn.id = params.id;

        closeBtn.id = 'closeBtn';
        parentNode.appendChild(closeBtn);

        closeBtn.addEventListener('click', function (e) {
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
