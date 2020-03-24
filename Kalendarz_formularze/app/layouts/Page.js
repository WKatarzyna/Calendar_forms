let placeholder;

class Page {
    constructor(htmlElement) {
        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        }, false);
        this.CreateMainPage(htmlElement);
    }

    CreateMainPage(htmlElement) {
        let timeInput = document.createElement("p");
        timeInput.id = "timeInput";
        htmlElement.appendChild(timeInput);
        let dateInput = document.createElement("p");
        dateInput.id = "dateInput";
        htmlElement.appendChild(dateInput);
        let breakLine = document.createElement("hr");
        htmlElement.appendChild(breakLine);
        placeholder = document.createElement("div");
        placeholder.classList.add("datePlaceholder");
        htmlElement.appendChild(placeholder);
        let currentM = document.createElement("p");
        currentM.id = "current";
        currentM.classList.add("current");
        placeholder.appendChild(currentM);
        let btnHolder = document.createElement("div");
        btnHolder.id = "btnHolder";
        placeholder.appendChild(btnHolder);
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        htmlElement.appendChild(wrapper);
        this.CreateArrow();
        let btnDisplay = document.createElement("button");
        btnDisplay.classList.add("display");
        let timePlaceholder = document.querySelector("#timeInput");
        let datePlaceholder = document.querySelector("#dateInput");
        let divCalender = document.createElement("div");
        divCalender.classList.add("calendar");
        htmlElement.appendChild(divCalender);
        let detailsBtn = document.createElement("div");
        detailsBtn.textContent = "Pokaż plan";
        detailsBtn.id = "eventsBtn";
        let linebreak = document.createElement("hr");
        htmlElement.appendChild(linebreak);
        linebreak.classList.add("element--hide");
        htmlElement.appendChild(detailsBtn);
        let taskArea = document.createElement("div");
        taskArea.classList.add("taskArea");
        taskArea.classList.add("element--hide");
        htmlElement.appendChild(taskArea);
        let addbtn = document.createElement("div");
        addbtn.id = "addBtn";
        taskArea.appendChild(addbtn);
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = "cross";
        svg.setAttribute("viewBox", "0 0 100 100");
        addbtn.appendChild(svg);
        let polyline1 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline1.setAttribute("points", "40, 10 10, 10 10, 10");
        svg.appendChild(polyline1);
        let polyline2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline2.setAttribute("points", "25, 25 25, -5 25, 20");
        svg.appendChild(polyline2);
        detailsBtn.addEventListener("click", displayTaskPanel);

        function hideTaskPanel() {
            linebreak.classList.add("element--hide");
            taskArea.classList.add("element--hide");
            detailsBtn.textContent = "Pokaż plan";
            detailsBtn.removeEventListener("click", hideTaskPanel);
            detailsBtn.addEventListener("click", displayTaskPanel);
        }

        function displayTaskPanel() {
            linebreak.classList.replace("element--hide", "element--visible");
            taskArea.classList.replace("element--hide", "element--visible");
            detailsBtn.textContent = "Ukryj plan";
            detailsBtn.removeEventListener("click", displayTaskPanel);
            detailsBtn.addEventListener("click", hideTaskPanel);
        }

        this.CreateClock(timePlaceholder, datePlaceholder);
    }

    CreateClock(placeholder) {
        let currentDate = new Date();
        let days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
        let months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
        let element = document.querySelector("#dateInput");
        element.innerText += days[currentDate.getDay()] + "," + " " + currentDate.getDate() + " " + checkTime(months[currentDate.getMonth()]) + " " + checkTime(currentDate.getFullYear());

        function startTime() {
            let today = new Date();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            hours = checkTime(hours);
            minutes = checkTime(minutes);
            seconds = checkTime(seconds);
            placeholder.innerHTML = hours + ":" + minutes + ":" + seconds;
            setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        startTime();
    }

    CreateArrow() {
        let btnHolder = document.querySelector("#btnHolder");
        let up = document.createElement("div");
        up.classList.add("upArrow");
        btnHolder.appendChild(up);
        let svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl.id = "svgElement";
        svgEl.setAttribute("viewBox", "0 0 100 100");
        up.appendChild(svgEl);
        let upArrow = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        upArrow.setAttribute("points", "70, 20 80, 10 90, 20");
        svgEl.appendChild(upArrow);
        let down = document.createElement("div");
        down.classList.add("downArrow");
        btnHolder.appendChild(down);
        let svgEl2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl2.id = "svg2";
        svgEl2.setAttribute("viewBox", "0 0 100 100");
        down.appendChild(svgEl2);
        let downArrow = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        downArrow.classList.add("downArrow");
        downArrow.setAttribute("points", "30, 10 40, 20 50, 10");
        svgEl2.appendChild(downArrow);
    }

    CreateMonths(resultList) {
        let tr;
        // let tanimated = document.querySelector("table");
        // let light;
        // tanimated.classList.add("animated");
        // setTimeout(function () {
        //     light = document.querySelector("#light");
        //     light.classList.add("element--hide");
        // }, 10);
        setTimeout(function () {
            // light.classList.replace("element--hide", "element--visible");
            let thead = document.querySelector("thead");
            let body = document.querySelector("tbody");
            while (body.firstChild) {
                body.firstChild.remove();
            }
            if (thead.firstChild) {
                thead.firstChild.remove();
            }
            let tbody = document.createElement("tbody");
            tbody.id = "fadeIn";
            document.querySelector(".calendar-table").appendChild(tbody);
            let counter = 0;
            for (let i = 0; i < 16; i++) {
                if (i % 4 === 0) {
                    tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    tr.classList.add("mtable");
                }
                if (i >= resultList.length) {
                    let td = document.createElement("td");
                    let mBtn = document.createElement("div");
                    mBtn.classList.add("mBtn","greyBtn");
                    tr.appendChild(td);
                    td.appendChild(mBtn);
                    mBtn.id = `${counter + 1}`;
                    mBtn.textContent = resultList[`${counter++}`];
                    mBtn.dataset.number = `${counter}`;
                } else {
                    let td = document.createElement("td");
                    td.classList.add("mCells");
                    let mBtn = document.createElement("div");
                    mBtn.classList.add("mBtn");
                    mBtn.textContent += resultList[i];
                    mBtn.dataset.number = `${i + 1}`;
                    tr.appendChild(td);
                    td.appendChild(mBtn);
                }
            }
            appObject.MonthSection();
        }, 500);
    }

    CreateDecades(nFirstDecadeYear, lastDecadeYear, startCalYear) {
        document.querySelector("tbody").id = "fadeOut";
        document.querySelector("tbody").classList.add("animated");
        let yearRow;
        let tbody;
        let tCell;
        let yearTiles;
        let table = document.querySelector("table");
        let thead;
        while (table.firstChild) {
            table.firstChild.remove();
        }
        setTimeout(function () {
            thead = document.createElement("thead");
            tbody = document.createElement("tbody");
            tbody.id = "fadeIn";
            document.querySelector(".calendar-table").appendChild(thead);
            document.querySelector(".calendar-table").appendChild(tbody);
            for (let j = 0; j < 16; j++) {
                if (j % 4 === 0) {
                    yearRow = document.createElement("tr");
                    tbody.appendChild(yearRow);
                }
                tCell = document.createElement("td");
                yearRow.appendChild(tCell);
                yearTiles = document.createElement("div");
                tCell.appendChild(yearTiles);
                yearTiles.innerHTML += parseInt(startCalYear) + j;
                yearTiles.classList.add("yearBtn");
                yearTiles.id = `${parseInt(startCalYear) + j}`;
                yearTiles.dataset.number = `${parseInt(startCalYear) + j}`;
                if (yearTiles.id < nFirstDecadeYear) {
                    yearTiles.classList.add("belowRange");
                }
                if (yearTiles.id > lastDecadeYear) {
                    yearTiles.classList.add("aboveRange");
                }
                if (yearTiles.id === now) {
                    yearTiles.classList.add("currentYear");
                    yearTiles.style.color = "white";
                }
                if (yearTiles.id === "100") {
                    let btnHolder = document.querySelector("#btnHolder");
                    while (btnHolder.firstChild) {
                        btnHolder.firstChild.remove();
                    }
                }
            }
            appObject.DecadePanel();
        }, 500);
    }

    CreateTaskSection() {
        placeholder = document.querySelector(".container");
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        placeholder.classList.add("holder");
        let wrapper;
        wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        // let light = document.createElement("div");
        // light.id = "light";
        // wrapper.appendChild(light);
        wrapper.style.display = "none";
        new CloseBtn({
            class: 'closeBtn',
            id: 'closeBtn',
        }, placeholder);

        let closeBtn = document.getElementById('closeBtn');
        new ReturnIcon({
            id: 'return'
        }, closeBtn);

        let taskPanel = document.createElement("div");
        taskPanel.classList.add("task-panel");
        placeholder.appendChild(taskPanel);
        new TaskTile({
            class: 'task-panel',
            textContent1: 'Spotkanie',
            textContent2: 'Wydarzenie',
            textContent3: 'Lista Zadań',
            textContent4: 'Kontakty',
            id1: 'tile1',
            id2: 'tile2',
            id3: 'tile3',
            id4: 'tile4',
        }, taskPanel);
        let taskTile1 = document.getElementById('tile1');
        let iconHolder = document.createElement("div");
        taskTile1.appendChild(iconHolder);
        new MeetingIcon({
            id1: 'meetingIcon',
            id2: 'calendar',
        }, iconHolder);
        new TaskButtons({
            class: 'tileBtn',
            textContent: 'dodaj',
            id1: 'meetingBtn',
        }, taskTile1);
        let taskTile2 = document.getElementById('tile2');
        let eventIcon = document.createElement("div");
        eventIcon.id = "event-icon";
        taskTile2.appendChild(eventIcon);
        new CalendarIcon({
            id: 'calendarIcon',
        }, eventIcon);
        let eventBtn = document.createElement("button");
        taskTile2.appendChild(eventBtn);
        eventBtn.classList.add("tileBtn");
        eventBtn.id = "eventBtn";
        eventBtn.textContent = "dodaj";
        let taskTile3 = document.getElementById('tile3');
        let taskIcon = document.createElement("div");
        taskIcon.id = "task-icon";
        taskTile3.appendChild(taskIcon);
        new PenIcon({
            id: 'pen',
        }, taskIcon);
        let taskBtn = document.createElement("button");
        taskTile3.appendChild(taskBtn);
        taskBtn.classList.add("tileBtn");
        taskBtn.id = "taskBtn";
        taskBtn.textContent = "dodaj";
        let taskTile4 = document.getElementById('tile4');
        let eventIcon4 = document.createElement("div");
        eventIcon4.id = "event-icon";
        taskTile4.appendChild(eventIcon4);
        new PhoneIcon({
            id: 'phone',
        }, eventIcon4);
        let contactBtn = document.createElement("button");
        taskTile4.appendChild(contactBtn);
        contactBtn.classList.add("tileBtn");
        contactBtn.id = "contactBtn";
        contactBtn.textContent = "dodaj";
    }

    CreateContactPanel() {
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        let light = document.createElement("div");
        light.id = "light";
        wrapper.appendChild(light);
        wrapper.style.display = "none";
        placeholder.classList.add("holder");
        let headerTitle = document.createElement("h1");
        headerTitle.textContent = "Lista Kontaktów";
        headerTitle.classList.add("taskPanelHeaders");
        placeholder.appendChild(headerTitle);
        let participantArea = document.createElement("div");
        participantArea.id = "participantArea";
        participantArea.textContent = "Lista kontaktów";
        placeholder.appendChild(participantArea);

        let participantSection = document.createElement("div");
        participantSection.id = "participantSection";
        participantArea.appendChild(participantSection);
        new SearchInput({
            id: 'searchInput',
            placeholder: 'Znajdź',
            class: 'searchInput'
        }, participantSection);


        new SortBtn({
            id: 'sortBtn',
            class: 'sort',
            textContent: 'Sortuj',
        }, participantSection);
        let dropDownHolder = document.createElement("div");
        dropDownHolder.classList.add("dropDown");
        participantArea.appendChild(dropDownHolder);
        let newUser = document.createElement("div");
        newUser.id = "newUser";
        newUser.textContent = "Dodaj kontakt";
        participantArea.appendChild(newUser);
        new ListElement({
            placeholder: 'Wprowadź nazwę',
            class: 'addInput',
        }, newUser);
        let list = document.createElement('ul');
        participantArea.appendChild(list);
        console.log(list);
        new AddBtn({
                class: 'addBtn',
                textContent: 'Dodaj',
                id: "userBtn"
            },
            newUser);
        new CloseBtn({
            class: 'closeBtn',
            id: 'closeBtn',
        }, placeholder);
        let userInfo = document.createElement('div');
        placeholder.appendChild(userInfo);

        userInfo.classList.add('userInfo');
        let userTable = document.createElement('div');
        userTable.classList.add('blueTable');
        userInfo.appendChild(userTable);
        let tHeader = document.createElement('div');
        userTable.appendChild(tHeader);
        tHeader.classList.add('tHeader');
        let headerRow = document.createElement('div');
        tHeader.appendChild(headerRow);
        headerRow.classList.add('headerRow');

        let tHead1 = document.createElement('div');
        headerRow.appendChild(tHead1);
        tHead1.classList.add('tElement');
        let tHead2 = document.createElement('div');
        headerRow.appendChild(tHead2);
        let tHead3 = document.createElement('div');
        headerRow.appendChild(tHead3);
        tHead2.classList.add('tElement');
        tHead1.textContent = "Imię i Nazwisko:";
        tHead2.textContent = "Email:";
        tHead3.textContent = "Telefon:";
        tHead3.classList.add('tElement');
        let closeBtn = document.getElementById('closeBtn');
        new ReturnIcon({
            id: 'return',
        }, closeBtn);

    }

    CreteClockSVG(iconHolder) {
        iconHolder.addEventListener("click", page.CreateAnalogClock);
        let clockHolderSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        clockHolderSvg.setAttribute("viewBox", "0 3 60 80");
        clockHolderSvg.id = "clockSvg";
        iconHolder.appendChild(clockHolderSvg);
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,16,25Z");
        path.id = "clock";
        clockHolderSvg.appendChild(path);
        let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", "15 15 9.33 15 9.33 17 17 17 17 8.83 15 8.83 15 15");
        clockHolderSvg.appendChild(polygon);
        polygon.style.fill = "lightgrey";
    }

    CreateCalendarSVG(imageCalendar) {
        let svgCelendar;
        svgCelendar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCelendar.id = "iconCalender";
        svgCelendar.setAttribute("viewBox", "0 0 100 100");
        imageCalendar.appendChild(svgCelendar);
        let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75\n" +
            "\t\t\tc0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75\n" +
            "\t\t\tc-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v2h2.5h27.5h2.5v-2\n" +
            "\t\t\tC34.474,5.855,32.568,3.948,30.224,3.948z M11.466,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75\n" +
            "\t\t\tc0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M19.546,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25\n" +
            "\t\t\tV2.75c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M27.626,7.646c0,0.689-0.525,1.25-1.17,1.25\n" +
            "\t\t\tc-0.646,0-1.17-0.561-1.17-1.25V2.75c0-0.689,0.524-1.25,1.17-1.25c0.645,0,1.17,0.561,1.17,1.25V7.646z");
        svgCelendar.appendChild(path1);
        path1.classList.add("calendarIconSvg");
        let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M1.974,32.198c0,2.343,1.907,4.25,4.25,4.25h24c2.344,0,4.25-1.907,4.25-4.25V12.099h-32.5V32.198z M30.224,32.346H6.302 v-1.875h23.922V32.346z M30.224,27.596H6.302v-1.875h23.922V27.596z M19.8,20.971h10.424v1.875H19.8V20.971z M6.224,15.015h11.505v7.831H6.224V15.015z");
        path2.classList.add("calendarIconSvg");
        svgCelendar.appendChild(path2);
    }

    CreateMeetingPanel() {
        let placeholder = document.querySelector(".container");
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        let light = document.createElement("div");
        light.id = "light";
        wrapper.appendChild(light);
        wrapper.style.display = "none";
        placeholder.classList.add("holder");
        let headerTitle = document.createElement("h1");
        headerTitle.textContent = "Spotkania";
        headerTitle.classList.add("taskPanelHeaders");
        placeholder.appendChild(headerTitle);
        let addition = document.createElement("p");
        addition.textContent = " Pola, których wypełnienie jest wymagane, są oznaczone symbolem *";
        placeholder.appendChild(addition);
        new FormArea({
            id: "pageform",
            name: "pageform",
            action: "",
            autocomplete: "off"
        }, placeholder);
        let formHeader = document.createElement("div");
        formHeader.classList.add("formHeader");
        let pageform = document.getElementById("pageform");
        pageform.appendChild(formHeader);
        let taskLabel = document.createElement("label");
        taskLabel.textContent = "*Tytuł: ";
        taskLabel.id = "taskLabel";
        formHeader.appendChild(taskLabel);
        new TaskName({
            id: "meetingTitle",
            class: "taskInput",
            type: "text",
            placeholder: "Wprowadź nazwę",
            pattern: "[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+",
            autocomplete: "off",
            required: true
        }, taskLabel);
        let placeLabel = document.createElement("label");
        placeLabel.textContent = "*Miejsce: ";
        placeLabel.id = "taskLabel";
        formHeader.appendChild(placeLabel);
        new Place({
            type: "text",
            class: "taskInput",
            placeholder: "Wprowadź miejsce",
            id: "placeInput"
        }, placeLabel);
        let startdate = document.createElement("label");
        startdate.textContent = "*Rozpoczęcie: ";
        startdate.classList.add("startDate");
        formHeader.appendChild(startdate);
        let startDateLabel = document.createElement("div");
        startDateLabel.classList.add("startDateLabel");
        startdate.appendChild(startDateLabel);
        new StartDate({
            id: "taskStart",
            required: true,
            type: "date",
            class: "taskInput"
        }, startDateLabel);
        let eventHourLabel = document.createElement("div");
        eventHourLabel.classList.add("eventDetails");
        startDateLabel.appendChild(eventHourLabel);
        // tworzenie parametrów dla inputu czasu
        new HoursInput({
            id: "inputHours",
            type: "text",
            maxLength: 2,
            value: "12"
        }, eventHourLabel);
        let col = document.createElement("div");
        col.classList.add("col");
        col.textContent = ":";
        eventHourLabel.appendChild(col);
        new MinutesInput({
            id: "inputMinutes",
            type: "text",
            maxLength: 2,
            value: "00"
        }, eventHourLabel);

        let eventStartHourIcon = document.createElement("div");
        eventStartHourIcon.id = "eventHourIcon";
        page.CreateRadioBtns(startDateLabel);
        let iconHolder = document.createElement("div");
        iconHolder.classList.add("iconHolder");
        eventHourLabel.appendChild(iconHolder);
        page.CreteClockSVG(iconHolder);
        let imageCalendar = document.createElement("div");
        imageCalendar.classList.add("calendarInput");
        startDateLabel.appendChild(imageCalendar);
        page.CreateCalendarSVG(imageCalendar);
        let endDateLabel = document.createElement("div");
        endDateLabel.classList.add("endDateLabel");
        pageform.appendChild(endDateLabel);
        let endDate = document.createElement("label");
        endDate.textContent = "Zakończenie: ";
        endDateLabel.appendChild(endDate);
        new EndDate({
            id: "endInput",
            required: true,
            type: "date",
            class: "taskInput",
            value: new Date(),
            min: document.getElementById("taskStart")
        }, endDate);
        let calendarImage = document.createElement("div");
        calendarImage.classList.add("iconInput");
        endDateLabel.appendChild(calendarImage);
        let calendarSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        calendarSvg.id = "iconCalender";
        calendarSvg.setAttribute("viewBox", "0 0 100 100");
        calendarImage.appendChild(calendarSvg);
        let newpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newpath.setAttribute("d", "M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75\n" + "\t\t\tc0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75\n" + "\t\t\tc-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v2h2.5h27.5h2.5v-2\n" + "\t\t\tC34.474,5.855,32.568,3.948,30.224,3.948z M11.466,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75\n" + "\t\t\tc0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M19.546,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25\n" + "\t\t\tV2.75c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M27.626,7.646c0,0.689-0.525,1.25-1.17,1.25\n" + "\t\t\tc-0.646,0-1.17-0.561-1.17-1.25V2.75c0-0.689,0.524-1.25,1.17-1.25c0.645,0,1.17,0.561,1.17,1.25V7.646z");
        calendarSvg.appendChild(newpath);
        newpath.classList.add("calendarSmall");
        let newpath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newpath2.setAttribute("d", "M1.974,32.198c0,2.343,1.907,4.25,4.25,4.25h24c2.344,0,4.25-1.907,4.25-4.25V12.099h-32.5V32.198z M30.224,32.346H6.302 v-1.875h23.922V32.346z M30.224,27.596H6.302v-1.875h23.922V27.596z M19.8,20.971h10.424v1.875H19.8V20.971z M6.224,15.015h11.505v7.831H6.224V15.015z");
        newpath2.classList.add("calendarSmall");
        calendarSvg.appendChild(newpath2);
        let timeBtn = document.createElement("div");
        timeBtn.id = "dayRange";
        let dayRange = document.createElement("input");
        dayRange.type = "checkbox";
        dayRange.id = "checkbox";
        timeBtn.appendChild(dayRange);
        dayRange.addEventListener("click", hideDetails);

        function hideDetails() {
            let hourSection = document.querySelector(".eventDetails");
            hourSection.classList.add("hidden");
            let radio = document.getElementsByClassName("btnLabel");
            radio[0].classList.add("element--hide");
            radio[1].classList.add("element--hide");
            dayRange.removeEventListener("click", hideDetails);
            dayRange.addEventListener("click", showDetails);
        }

        function showDetails() {
            let hourSection = document.querySelector(".eventDetails");
            let radio = document.getElementsByClassName("btnLabel");
            hourSection.classList.remove("hidden", "visible");
            radio[0].classList.add("element--visible");
            radio[1].classList.add("element--visible");
            dayRange.removeEventListener("click", showDetails);
            dayRange.addEventListener("click", hideDetails);
        }

        let dayRangeLabel = document.createElement("label");
        dayRangeLabel.textContent = "Wydarzenie całodniowe";
        timeBtn.appendChild(dayRangeLabel);
        let agendaLabel = document.createElement("div");
        agendaLabel.id = "agendaLabel";
        let details = document.createElement("label");
        details.textContent = "Uwagi:";
        details.id = "agenda";
        pageform.appendChild(details);
        pageform.appendChild(agendaLabel);
        //03.10.2019
        new TextArea({
            id: "agendaDetails",
            class: "textarea-scrollbar"
        }, details);
        let participantArea = document.createElement("div");
        participantArea.id = "participantArea";
        participantArea.textContent = "Lista uczestników:";
        placeholder.appendChild(participantArea);
        let participantSection = document.createElement("div");
        participantSection.id = "participantSection";
        participantArea.appendChild(participantSection);
        new SearchInput({
            id: 'searchInput',
            placeholder: 'Znajdź',
            class: 'searchInput'
        }, participantSection);

        new SortBtn({
            id: 'sortBtn',
            class: 'sort',
            textContent: 'Sortuj',
        }, participantSection);

        let listTitle = document.createElement("div");
        listTitle.textContent = "Wybierz uczestnika";
        listTitle.id = "listTitle";
        participantArea.appendChild(listTitle);

        let dropDownHolder = document.createElement("div");
        dropDownHolder.classList.add("dropDown");
        participantArea.appendChild(dropDownHolder);
        new List({
            id: 'firstIcon',

        }, dropDownHolder);

        dropDownHolder.addEventListener("click", displayList);

        function displayList() {
            listWrapper.style.display = "block";
            listWrapper.id = "listWrapper";
            dropDownHolder.style.transform = "rotate(180deg)";
            dropDownHolder.removeEventListener("click", displayList, false);
            dropDownHolder.addEventListener("click", hideList);
        }

        function hideList() {
            listWrapper.style.display = "none";
            dropDownHolder.removeEventListener("click", hideList, false);
            dropDownHolder.style.transform = "";
            dropDownHolder.addEventListener("click", displayList);
        }

        let listWrapper = document.createElement("div");
        listWrapper.style.display = "none";
        participantArea.appendChild(listWrapper);
        let list = document.createElement("ul");
        list.classList.add("user__list--animate");
        listWrapper.appendChild(list);
        let participantInput = document.createElement("input");
        participantInput.type = "checkbox";
        participantInput.id = "firstInput";
        let elem1 = document.createElement("li");
        elem1.classList.add("userList");
        elem1.classList.add("user__list__item");
        elem1.textContent = "Anna Kowalska";
        elem1.append(participantInput);
        list.appendChild(elem1);
        document.querySelectorAll(".user__list--animate").forEach(btn => btn.addEventListener("click", page.CreatePersonDetails));
        let btnLabel = document.createElement("div");
        btnLabel.id = "btnLabel";
        placeholder.appendChild(btnLabel);
        new ValidationButtons({
            type: "submit",
            textContent1: "Zatwierdź",
            id1: "accept",
            textContent2: "Anuluj",
            id2: "cancel"
        }, btnLabel);
        let newUser = document.createElement("div");
        newUser.id = "newUser";
        newUser.textContent = "Dodaj uczestnika";
        participantArea.appendChild(newUser);
        new ListElement({
            placeholder: 'Wprowadź nazwę',
            class: 'addInput',
        }, newUser);
        let searchInput = document.getElementById('searchInput');
        new AddBtn({
                class: 'addBtn',
                textContent: 'Dodaj',
                id: "userBtn"
            },
            newUser);
        let inputChange = document.querySelector(".addInput");
        appObject.OnInput(inputChange, searchInput);
    }

    CreateRadioBtns(startDateLabel) {
        let error = document.createElement("div");
        error.textContent = "*Pole wymagane";
        error.classList.add("error");
        startDateLabel.appendChild(error);
        let btnLabel1 = document.createElement("label");
        btnLabel1.classList.add("btnLabel");
        startDateLabel.appendChild(btnLabel1);
        btnLabel1.textContent = "Przed południem";
        let checkbox1 = document.createElement("input");
        checkbox1.type = "radio";
        checkbox1.disabled = true;
        checkbox1.name = "time";
        checkbox1.value = "morning";
        checkbox1.id = "radioBtn1";
        checkbox1.checked = true;
        btnLabel1.appendChild(checkbox1);
        let btnLabel2 = document.createElement("label");
        btnLabel2.classList.add("btnLabel");
        startDateLabel.appendChild(btnLabel2);
        btnLabel2.textContent = "Po południu";
        let checkbox2 = document.createElement("input");
        checkbox2.type = "radio";
        checkbox2.name = "time";
        checkbox2.value = "afternoon";
        checkbox2.id = "radioBtn2";
        btnLabel2.appendChild(checkbox2);
        appObject.HourHandler(checkbox1, checkbox2);
    }

    CreateEventPanel() {
        let placeholder = document.querySelector(".holder");
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        let light = document.createElement("div");
        light.id = "light";
        wrapper.appendChild(light);
        wrapper.style.display = "none";
        placeholder.classList.add("holder");
        let eventHeader = document.createElement("div");
        eventHeader.classList.add("eventHeader");
        let eventH1 = document.createElement("h1");
        eventH1.textContent = "Wydarzenia";
        eventH1.classList.add("taskPanelHeaders");
        eventHeader.appendChild(eventH1);
        placeholder.appendChild(eventHeader);
        new FormArea({
            id: "pageform",
            name: "pageform",
            action: "",
            autocomplete: "off"
        }, placeholder);
        let form = document.getElementById("pageform");
        form.classList.add("container__form");
        placeholder.appendChild(form);
        let header = document.createElement("div");
        header.classList.add("formHeader");
        form.appendChild(header);
        let taskLabel = document.createElement("label");
        taskLabel.textContent = "*Nazwa i miejsce: ";
        taskLabel.id = "taskLabel";
        taskLabel.classList.add("u-center-text");
        header.appendChild(taskLabel);
        new TaskName({
            id: "meetingTitle",
            class: "taskInput",
            type: "text",
            pattern: "[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ]+",
            placeholder: "Wprowadź nazwę",
            autocomplete: "off",
            required: true
        }, taskLabel);
        new Place({
            type: "text",
            class: "taskInput",
            placeholder: "Wprowadź miejsce",
            id: "placeInput"
        }, taskLabel);
        let enddate = document.createElement("label");
        enddate.textContent = "*Data:";
        header.appendChild(enddate);
        new StartDate({
            id: "taskStart",
            required: true,
            type: "date",
            class: "taskInput"
        }, enddate);
        let eventHourLabel = document.createElement("div");
        eventHourLabel.classList.add("eventDetails");
        new HoursInput({
            id: "inputHours",
            type: "text",
            maxLength: 2,
            value: "12",
            required: true
        }, eventHourLabel);
        let col = document.createElement("div");
        col.classList.add("col");
        col.textContent = ":";
        eventHourLabel.appendChild(col);
        new MinutesInput({
            id: "inputMinutes",
            type: "text",
            maxLength: 2,
            value: "00"
        }, eventHourLabel);
        form.appendChild(eventHourLabel);
        let eventStartHourIcon = document.createElement("div");
        eventStartHourIcon.id = "eventHourIcon";
        let startDateLabel = document.createElement("div");
        startDateLabel.classList.add("startDateLabel");
        form.appendChild(startDateLabel);
        page.CreateRadioBtns(startDateLabel);
        let iconHolder = document.createElement("div");
        iconHolder.classList.add("iconHolder");
        eventHourLabel.appendChild(iconHolder);
        page.CreteClockSVG(iconHolder);
        let dateDetails = document.createElement("div");
        dateDetails.id = "dateDetails";
        let description = document.createElement("div");
        description.id = "description";
        form.appendChild(description);
        let details = document.createElement("label");
        details.textContent = "Uwagi:";
        details.id = "agenda";
        description.appendChild(details);
        new TextArea({
            type: "text",
            id: "agendaDetails",
            class: "textarea-scrollbar"
        }, details);
        let markDown = document.createElement("input");
        markDown.id = "markDown";
        markDown.type = "checkbox";
        form.appendChild(markDown);
        let checkBoxLabel = document.createElement("label");
        checkBoxLabel.textContent = "Oznacz jako ważne";
        form.appendChild(checkBoxLabel);
        let holidayType = document.createElement("div");
        holidayType.id = "holidayType";
        placeholder.appendChild(holidayType);
        let listTitle = document.createElement("div");
        listTitle.textContent = "Wybierz rodzaj wydarzenia";
        listTitle.id = "listTitle";
        holidayType.appendChild(listTitle);
        let dropDownHolder = document.createElement("div");
        dropDownHolder.classList.add("dropDown");
        holidayType.appendChild(dropDownHolder);
        let firstIcon = document.createElement("div");
        dropDownHolder.appendChild(firstIcon);
        firstIcon.id = "firstIcon";
        let svgArrowicon;
        svgArrowicon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgArrowicon.setAttribute("viewBox", "0 0 100 100");
        svgArrowicon.classList.add("downMenu");
        firstIcon.appendChild(svgArrowicon);
        let downArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
        downArrow.setAttribute("d", "M3.275,8C2.819,8,2.212,8.3,2.06,8.75c-0.152,0.45,0,0.9,0.304,1.35c3.343,4.8,9.725,9.6,9.725,9.6s0.304,0.3,0.907,0.3 c0.612,0,0.916-0.3,0.916-0.3s6.382-4.8,9.725-9.6c0.304-0.45,0.456-0.9,0.304-1.35C23.788,8.3,23.181,8,22.725,8H3.275z");
        svgArrowicon.appendChild(downArrow);
        downArrow.id = "arrowDown";
        downArrow.addEventListener("click", displayList);
        let list = document.createElement("ul");
        list.id = "list";
        let listHolder = document.createElement("div");
        placeholder.appendChild(listHolder);
        listHolder.classList.add("element--none");
        listHolder.classList.add("listHolder");
        list.classList.add("menu__list--animate");
        listHolder.appendChild(list);
        let listElement;
        let counter = 1;
        let number = 1;
        let dayArray = ["Dzień wolny od pracy", "Święto państwowe", "Święto międzynarodowe", "Święto europejskie", "Święto branżowe", "Święto ludowe", "Inne"];
        for (let i = 0; i < 7; i++) {
            listElement = document.createElement("li");
            listElement.classList.add("holidayList");
            listElement.id = "elem" + `${counter++}`;
            listElement.textContent = dayArray[i];
            listElement.classList.add("menu__list__item");
            listElement.dataset.number = `${number++}`;
            list.appendChild(listElement);
        }

        function displayList() {
            listHolder.classList.replace("element--none", "element--block");
            let ul = document.getElementById("list");
            let items = ul.getElementsByTagName("li");
            for (let i = 0; i < items.length; ++i) {
                items[i].classList.add("element__list");
                items[i].className = items[i].className.replace(/\bcol-.+?/g, "");
                items[i].addEventListener("click", markDay);
            }
            svgArrowicon.style.transform = "rotate(180deg)";
            downArrow.removeEventListener("click", displayList, false);
            downArrow.addEventListener("click", hideList);
        }

        function markDay(e) {
            let elem1 = document.getElementById("elem1");
            let elem2 = document.getElementById("elem2");
            let elem3 = document.getElementById("elem3");
            let elem4 = document.getElementById("elem4");
            let elem5 = document.getElementById("elem5");
            let elem6 = document.getElementById("elem6");
            let elem7 = document.getElementById("elem7");
            let ul;
            let items;
            ul = document.getElementById("list");
            items = ul.getElementsByTagName("li");
            for (let i = 0; i < items.length; ++i) {
                if (items[i] !== e.target) {
                    items[i].classList.replace("element__list", "element--none");
                    if (e.target.id === elem1.id) {
                        e.target.classList.add("col-1");
                    }
                    if (e.target.id === elem2.id) {
                        e.target.classList.add("col-2");
                    }
                    if (e.target.id === elem3.id) {
                        e.target.classList.add("col-3");
                    }
                    if (e.target.id === elem4.id) {
                        e.target.classList.add("col-4");
                    }
                    if (e.target.id === elem5.id) {
                        e.target.classList.add("col-5");
                    }
                    if (e.target.id === elem6.id) {
                        e.target.classList.add("col-6");
                    }
                    if (e.target.id === elem7.id) {
                        e.target.classList.add("col-7");
                    }
                }
            }
        }

        function hideList() {
            svgArrowicon.style.transform = "";
            listHolder.classList.replace("element--block", "element--none");
            downArrow.removeEventListener("click", hideList, false);
            downArrow.addEventListener("click", displayList);
        }

        let btnLabel = document.createElement("div");
        btnLabel.id = "btnLabel";
        placeholder.appendChild(btnLabel);
        new ValidationButtons({
            type: "submit",
            textContent1: "Zatwierdź",
            id1: "accept",
            textContent2: "Anuluj",
            id2: "cancel"
        }, btnLabel);
        document.querySelector(".iconHolder").addEventListener("click", page.CreateAnalogClock);
    }

    CreateTaskPanel() {
        let placeholder = document.querySelector(".holder");
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        let light = document.createElement("div");
        light.id = "light";
        wrapper.appendChild(light);
        wrapper.style.display = "none";
        let eventHeader = document.createElement("div");
        let eventH1 = document.createElement("h1");
        eventH1.textContent = "Lista Zadań";
        eventH1.classList.add("taskPanelHeaders");
        eventHeader.appendChild(eventH1);
        placeholder.appendChild(eventHeader);
        placeholder.classList.add("holder");
        new FormArea({
            id: "pageform",
            name: "pageform",
            action: "",
            autocomplete: "off"
        }, placeholder);
        let form = document.getElementById('pageform');
        let header = document.createElement("div");
        header.classList.add("formHeader");
        form.appendChild(header);
        let taskLabel = document.createElement("label");
        taskLabel.textContent = "*Tytuł: ";
        taskLabel.id = "taskLabel";
        header.appendChild(taskLabel);
        new TaskName({
            id: "meetingTitle",
            class: "taskInput",
            type: "text",
            pattern: "[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ]+",
            placeholder: "Wprowadź nazwę",
            autocomplete: "off",
            required: true
        }, taskLabel);
        let startdate;
        startdate = document.createElement("label");
        startdate.textContent = "*Rozpoczęcie: ";
        startdate.classList.add("startDate");
        header.appendChild(startdate);
        let startDateLabel = document.createElement("div");
        startDateLabel.classList.add("startDateLabel");
        startdate.appendChild(startDateLabel);
        new StartDate({
            id: "taskStart",
            required: true,
            type: "date",
            class: "taskInput"
        }, startDateLabel);
        let agendaLabel = document.createElement("div");
        agendaLabel.id = "agendaLabel";
        let details = document.createElement("label");
        details.textContent = "Uwagi:";
        details.id = "agenda";
        form.appendChild(details);
        form.appendChild(agendaLabel);
        //03.10.2019
        new TextArea({
            type: "text",
            id: "agendaDetails",
            class: "textarea-scrollbar"
        }, details);
        let colorLabel = document.createElement("label");
        colorLabel.id = "colorLabel";
        colorLabel.textContent = "Wybierz oznaczenie";
        form.appendChild(colorLabel);
        let colorMark = document.createElement("input");
        colorMark.type = "color";
        colorMark.id = "colorMark";
        colorMark.value = "#f6b73c";
        colorLabel.appendChild(colorMark);
        let btnLabel = document.createElement("div");
        btnLabel.id = "btnLabel";
        placeholder.appendChild(btnLabel);
        new TaskValidation({
            type: "submit",
            textContent1: "Zatwierdź",
            id1: "accept",
            textContent2: "Anuluj",
            id2: "cancel"
        }, btnLabel);
    }

    CreatePersonDetails() {
        let userDetails = document.createElement("form");
        userDetails.classList.add("userDetails");
        userDetails.textContent = "Dodaj informacje kontaktowe";
        userDetails.action = "https://example.com/";
        document.querySelector("#participantArea").appendChild(userDetails);
        let information = document.createElement("div");
        information.classList.add("informationDetails");
        userDetails.appendChild(information);
        let email = document.createElement("label");
        email.textContent = "Adres email: ";
        let emailInput = document.createElement("input");
        emailInput.classList.add("emailInput");
        emailInput.type = "email";
        emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
        information.appendChild(email);
        information.appendChild(emailInput);
        let phone = document.createElement("label");
        phone.textContent = "Telefon: ";
        phone.title = "Podaj wartość w wymaganym formacie  xxx-xxx-xxx";
        let phoneInput = document.createElement("input");
        phoneInput.classList.add("phoneInput");
        information.appendChild(phone);
        information.appendChild(phoneInput);
        let accept = document.createElement("button");
        accept.classList.add("accept");
        accept.type = "submit";
        information.appendChild(accept);
        accept.textContent = "Zatwierdź";
        accept.value = "submit";
        accept.onclick = function () {
            document.querySelector(".emailInput").required = true;
        };
        // appObject.ParticipanPanel(phoneInput);
    }

    CreateAnalogClock() {
        let clockIcon = document.querySelector(".iconHolder");
        appObject.ClockHandler(clockIcon);
        document.querySelector("#radioBtn1").checked = true;
        document.querySelector("#radioBtn1").disabled = true;
        document.querySelector("#radioBtn2").checked = false;
        document.querySelector("#radioBtn2").disabled = false;
        document.querySelector("#inputHours").value = "12";
        document.querySelector("#inputMinutes").value = "00";
        let clockWindow = document.createElement("div");
        clockWindow.classList.add("clockWindow");
        clockWindow.addEventListener("click", () => {
            clockPanel.classList.toggle("clockPanel--animated");
            clockWindow.classList.toggle("clockWindow--animated");
            clockWindow.addEventListener("animationend", animationEndCallback);
        });

        function animationEndCallback() {
            clockPanel.removeEventListener("animationend", animationEndCallback);
            clockPanel.classList.remove("clockPanel--animated");
            clockWindow.classList.remove("clockWindow--animated");
            clockWindow.remove();
            clockPanel.remove();
            document.querySelector("path").addEventListener("click", page.CreateAnalogClock);
        }

        let clockPanel = document.createElement("div");
        clockPanel.classList.add("clockPanel");
        let circleContainer = document.createElement("div");
        circleContainer.classList.add("circle__container");
        document.querySelector(".eventDetails").appendChild(clockWindow);
        document.querySelector(".eventDetails").appendChild(clockPanel);
        clockPanel.appendChild(circleContainer);
        let center = document.createElement("div");
        center.classList.add("center");
        let minutesPanel = document.createElement("div");
        minutesPanel.classList.add("hour-panel");
        clockPanel.appendChild(minutesPanel);
        let startNumber = 1;
        let clockTable;
        clockTable = [];
        let elemHour;
        for (let i = 0; i <= 11; i++) {
            elemHour = document.createElement("div");
            elemHour.classList.add(`hour${startNumber}`);
            elemHour.classList.add("hours");
            elemHour.setAttribute("data-hour", `${startNumber}`);
            elemHour.textContent = `${startNumber}`;
            startNumber++;
            clockTable.push(i + 1);
            minutesPanel.appendChild(elemHour);
        }
        let hoursContainer = document.createElement("div");
        hoursContainer.classList.add("hours-container");
        minutesPanel.appendChild(hoursContainer);
        let minutesContainer = document.createElement("div");
        minutesContainer.classList.add("minutes-container");
        minutesPanel.appendChild(minutesContainer);
        let hourHand = document.createElement("div");
        hourHand.classList.add("hourHand");
        let minuteHand = document.createElement("div");
        minuteHand.classList.add("minuteHand");
        minutesPanel.appendChild(center);
        hoursContainer.appendChild(hourHand);
        minutesContainer.appendChild(minuteHand);
        let number = 0;
        for (let i = 0; i <= 11; i++) {
            let elem = document.createElement("div");
            elem.classList.add(`number${number}`);
            elem.classList.add("minutes");
            elem.setAttribute("data-minutes", `${number}`);
            if (`${number}` < 10) {
                elem.textContent = "0" + `${number}`;
            } else {
                elem.textContent = `${number}`;
            }
            number += 5;
            circleContainer.appendChild(elem);
        }
        let popUp = document.createElement("div");
        popUp.classList.add("message");
        popUp.textContent = "Wybierz najpierw godzinę";
        popUp.style.display = "none";
        document.querySelector(".clockPanel").appendChild(popUp);
        document.querySelectorAll(".minutes").forEach(btn => btn.addEventListener("click", InputTimeMessage));

        function InputTimeMessage() {
            document.querySelector(".message").style.display = "block";
        }

        let hourBtn = document.querySelectorAll(".hours");
        hourBtn.forEach(btn => btn.addEventListener("click", function () {
            document.querySelectorAll(".minutes").forEach(btn => btn.removeEventListener("click", InputTimeMessage, false));
            let timeInput = document.querySelector("#inputHours");
            let filter;
            filter = parseInt(this.dataset.hour);
            document.querySelector(".hourHand").style.transform = `rotate(${30 *
            filter}deg)`;
            for (let i = 0; i < timeInput.value.length; i++) {
                if (filter < 10) {
                    timeInput.value = "0" + filter;
                } else {
                    timeInput.value = filter;
                }
            }
            document.querySelectorAll(".minutes").forEach(btn => btn.addEventListener("click", InputMinutes));

            function InputMinutes() {
                let filter;
                let timeInput = document.querySelector("#inputMinutes");
                let t = this;
                let tvalue = t.dataset.minutes;
                filter = parseInt(tvalue);
                document.querySelector(".minuteHand").style.transform = `rotate(${6 *
                filter}deg)`;
                for (let i = 0; i < timeInput.value.length; i++) {
                    if (filter < 10) {
                        timeInput.value = "0" + filter;
                    } else {
                        timeInput.value = filter;
                    }
                }
            }
        }));
    }

    CreateContactDetails(e) {
        let placeholder = document.querySelector(".holder");
        while (placeholder.firstChild) {
            placeholder.firstChild.remove();
        }
        placeholder.classList.add('popUp');
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        placeholder.appendChild(wrapper);
        let light = document.createElement("div");
        light.id = "light";
        wrapper.appendChild(light);
        wrapper.style.display = "none";
        let eventHeader = document.createElement("div");
        let eventH1 = document.createElement("h1");
        eventH1.textContent = "Kontakty";
        eventH1.classList.add("taskPanelHeaders");
        eventHeader.appendChild(eventH1);
        placeholder.appendChild(eventHeader);
        placeholder.classList.add("holder");
        new FormArea({
            id: "pageform",
            name: "pageform",
            action: "",
            autocomplete: "off",
        }, placeholder);
        let contactForm = document.getElementById('pageform');
        let content = document.createElement('div');
        content.classList.add('popUpContent');
        contactForm.append(content);
        let nameLabel = document.createElement('label');
        nameLabel.textContent = "Imię i Nazwisko:";
        content.appendChild(nameLabel);
        let error = document.createElement("div");
        error.textContent = "*Pole wymagane";
        error.classList.add("error");
        nameLabel.appendChild(error);
        nameLabel.classList.add('nameLabel');
        let icon1 = document.createElement("div");
        nameLabel.appendChild(icon1);
        icon1.classList.add('iconHolder');
        new ContactIcon({
            id: 'contactIcon',
        }, icon1);

        let nameInput = document.createElement('input');
        nameLabel.appendChild(nameInput);
        nameInput.classList.add('taskInput', 'nameInput');
        nameInput.pattern = "[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ]+";
        nameInput.id = "nameInput";
        let event = e.target;
        nameInput.value = event.textContent;
        nameInput.setAttribute("required", 'true');
        let emailLabel = document.createElement('label');
        emailLabel.textContent = "Wprowadź adres e-mail:";
        emailLabel.classList.add('emailLabel');
        content.appendChild(emailLabel);
        let icon2 = document.createElement("div");
        emailLabel.appendChild(icon2);
        icon2.classList.add('iconHolder');
        new EmailIcon({
            id: 'emailIcon',
        }, icon2);
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";  // zrobic test na inpucie
        emailInput.classList.add('taskInput', 'emailnput');
        emailInput.id = "emailInput";
        emailLabel.appendChild(emailInput);
        emailInput.setAttribute("required", 'true');
        let phoneLabel = document.createElement('label');
        phoneLabel.textContent = "Wprowadź numer telefonu:";
        phoneLabel.classList.add('phoneLabel');
        content.appendChild(phoneLabel);
        let icon3 = document.createElement("div");
        phoneLabel.appendChild(icon3);
        icon3.classList.add('iconHolder');
        new PhoneIcon({
            id: 'phoneIcon',
        }, icon3);
        let phoneInput = document.createElement('input');
        phoneInput.id = "phoneInput";
        phoneInput.placeholder = '(11)-111-111-111';
        phoneInput.classList.add('taskInput', 'phonelnput');
        phoneInput.maxLength = 16;
        phoneInput.addEventListener('input', function () {
            let val = phoneInput.value;
            for (let i = 0; i < val.length; i++) {
                if (val.length === 2) {
                    phoneInput.value = '(' + val + ')' + '-';
                }
                if (phoneInput.value.length === 8 || phoneInput.value.length === 12) {
                    phoneInput.value += '-';
                    break;

                }
            }

        });

        phoneLabel.appendChild(phoneInput);
        let btnLabel = document.createElement("div");
        btnLabel.id = "btnLabel";
        placeholder.appendChild(btnLabel);
        new ContactFormValidation({
            type: "submit",
            textContent1: "Zatwierdź",
            id1: "accept",
            textContent2: "Anuluj",
            id2: "cancel"
        }, btnLabel);

        appObject.RegExRules(nameInput, function (value) {
            return /^[A-Za-z_ ]*$/i.test(value);
        });
        appObject.RegExRules(emailInput, function (value) {
            return /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i.test(value);
        });

    }
}


