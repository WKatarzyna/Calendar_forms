let page, calendar, currentDate, month, year, currentDay, date, now, active, tbody;
let AppObject = function AppObject(htmlElement) {
    page = new Page(htmlElement);
    this.CreatePageObject(htmlElement);
    calendar = new Calendar(htmlElement);
    currentDate = new DateObject();
    this.CreatePrevMonthTable();
    this.CreateNextMonthsTable();
    this.TaskPanel();
};

AppObject.prototype = {
    CreatePageObject: function () {
    },
    CreatePrevMonthTable: function () {
        currentDate.PrevMonth();
        const BtnPrevMonth = document.querySelector('.upArrow');
        BtnPrevMonth.addEventListener('click', function () {
            month--;
            if (month < 0) {
                month = 11;
                year--
            }
            currentDate.PrevMonth();
            let rows = document.querySelectorAll('.row');
            for (let i = 0; i < rows.length; i++) {
                rows[i].classList.add('fadeFromTop');
            }
            let greyBtn = document.querySelectorAll('.grey');
            for (let i = 0; i < greyBtn.length; i++) {
                greyBtn[i].classList.add('changeColor');
            }
        });
    },
    CreateNextMonthsTable: function () {
        const BtnNextMonth = document.querySelector('.downArrow');
        BtnNextMonth.addEventListener('click', function () {
            month++;
            if (month > 11) {
                month = 0;
                year++
            }
            currentDate.PrevMonth();
            let rows = document.querySelectorAll('.row');
            for (let i = 0; i < rows.length; i++) {
                rows[i].classList.add('fadeFromBottom');
            }
            let greyBtn = document.querySelectorAll('.grey');
            for (let i = 0; i < greyBtn.length; i++) {
                greyBtn[i].classList.add('changeColor');
            }
        });
    },
    MonthSection: function () {
        const monthBtn = document.querySelectorAll('.mBtn');
        document.querySelector('tbody').id = "fadeOut";
        const thead = document.createElement('thead');
        const btnHolder = document.querySelector('#btnHolder');
        monthBtn.forEach(btn => btn.addEventListener('click', function () {
            tbody = document.querySelector('tbody');
            month = this.dataset.number - 1;
            let currentDateContent = document.querySelector('#current').textContent = "";
            while (tbody.firstChild) {
                tbody.firstChild.remove();
            }
            while (thead.firstChild) {
                thead.firstChild.remove();
            }
            while (btnHolder.firstChild) {
                btnHolder.firstChild.remove();
            }
            page.CreateArrow();
            currentDate.CurrentDateSec();
            currentDate.PrevMonth();
            appObject.CreateNextMonthsTable();
            appObject.CreatePrevMonthTable();
        }));
        const greyBtn = document.querySelectorAll('.greyBtn');
        greyBtn.forEach(btn => btn.addEventListener('click', function () {
            const tbody = document.querySelector('tbody');
            month = this.dataset.number - 1;
            year += 1;
            document.querySelector('#current').textContent = "";
            while (tbody.firstChild) {
                tbody.firstChild.remove();
            }
            while (thead.firstChild) {
                thead.firstChild.remove();
            }
            while (btnHolder.firstChild) {
                btnHolder.firstChild.remove();
            }
            page.CreateArrow();
            currentDate.CurrentDateSec();
            currentDate.PrevMonth();
            appObject.CreateNextMonthsTable();
            appObject.CreatePrevMonthTable();
        }));
    },
    DecadesSec: function () {
        document.querySelector('#current').addEventListener('click', function handler(e) {
            currentDate.DecadesRange(now);
            currentDate.DecadeCalcRange(year);
            e.currentTarget.removeEventListener(e.type, handler);
        });
    },
    ChangeDecades: function () {
        document.querySelector('.upArrow').addEventListener('click', function () {
            year -= 10;
            currentDate.DecadeCalcRange(year);
        });
        document.querySelector('.downArrow').addEventListener('click', upDecade);

        function upDecade() {
            tbody = document.querySelector('tbody');
            const thead = document.querySelector('thead');
            while (tbody.firstChild) {
                tbody.firstChild.remove();
            }
            while (thead.firstChild) {
                thead.firstChild.remove();
            }
            year += 10;
            currentDate.DecadeCalcRange(year);
        }
    },
    DecadePanel: function () {
        document.querySelector('#fadeIn').id = "decadesPanel";
        const btnHolder = document.querySelector('#btnHolder');
        const yearBtn = document.querySelectorAll('.yearBtn');
        yearBtn.forEach(btn => btn.addEventListener('click', function () {
            tbody = document.querySelector('tbody');
            while (tbody.firstChild) {
                tbody.firstChild.remove();
            }
            while (btnHolder.firstChild) {
                btnHolder.firstChild.remove();
            }
            document.querySelector('#current').textContent = "";
            year = parseInt(this.dataset.number);
            currentDate.DisplayMonths();
        }));
    },
    TaskPanel: function () {
        document.querySelector('#addBtn').onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('addBtn').disabled = true;
            page.CreateTaskSection();
            document.getElementById('meetingBtn').addEventListener('click', page.CreateMeetingPanel);
            document.getElementById('eventBtn').addEventListener('click', page.CreateEventPanel);
            document.getElementById('taskBtn').addEventListener('click', page.CreateTaskPanel);
            // document.getElementById('contactBtn').addEventListener('click', page.CreateContactDetails);
        }
    },
    RegExRules: function (textbox, inputFilter,) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    },
    HourHandler: function (checkbox1, checkbox2) {
        checkbox2.onclick = function () {
            document.querySelector('#radioBtn1').checked = false;
            document.querySelector('#radioBtn1').disabled = false;
            let value = document.querySelector('#inputHours').value;
            let hours = parseInt(value);
            document.querySelector('#inputHours').value = hours + 12;
            document.querySelector('#radioBtn2').disabled = true;
        };
        checkbox1.onclick = function () {
            document.querySelector('#radioBtn2').disabled = false;
            document.querySelector('#radioBtn2').checked = false;
            let value = document.querySelector('#inputHours').value;
            let hours = parseInt(value);
            document.querySelector('#inputHours').value = hours - 12;
            let content = parseInt(document.querySelector('#inputHours').value);
            if (content < 10) {
                document.querySelector('#inputHours').value = "0" + document.querySelector('#inputHours').value
            }
            document.querySelector('#radioBtn1').disabled = true;
        }
    },
    ClockHandler: function (clockIcon) {
        clockIcon.removeEventListener('click', page.CreateAnalogClock);
    },

    OnInput: function (inputChange, searchInput) {
        appObject.RegExRules(inputChange, function (value) {
            return /^[\s\p{L}]+$/u.test(value);
        });
        appObject.RegExRules(searchInput, function (value) {
            return /^[A-Za-z_ ]*$/i.test(value);
        });
        inputChange.onkeydown = function (event) {
            let key = event.which;
            if (key === 8 || key === 46)
                return true;  // koniec 18.09.2019
        };

    },
    ParticipantPanel: function (phoneInput) {
        appObject.RegExRules(phoneInput, function (value) {
            return /^\d*$/.test(value);
        });
    },

};