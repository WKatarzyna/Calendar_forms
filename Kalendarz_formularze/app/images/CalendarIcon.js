class CalendarIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgCalendar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCalendar.id = params.id;
        svgCalendar.setAttribute("viewBox", "0 0 40 40");
        parentNode.appendChild(svgCalendar);
        const calendar = document.createElementNS("http://www.w3.org/2000/svg", "path");
        calendar.id = "calendar";
        calendar.setAttribute("d", "M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75\n" + "\t\t\tc0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75\n" + "\t\t\tc-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v2h2.5h27.5h2.5v-2\n" + "\t\t\tC34.474,5.855,32.568,3.948,30.224,3.948z M11.466,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75\n" + "\t\t\tc0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M19.546,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25\n" + "\t\t\tV2.75c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M27.626,7.646c0,0.689-0.525,1.25-1.17,1.25\n" + "\t\t\tc-0.646,0-1.17-0.561-1.17-1.25V2.75c0-0.689,0.524-1.25,1.17-1.25c0.645,0,1.17,0.561,1.17,1.25V7.646z");
        svgCalendar.appendChild(calendar);
        const calendar2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        calendar2.setAttribute("d", "M1.974,32.198c0,2.343,1.907,4.25,4.25,4.25h24c2.344,0,4.25-1.907,4.25-4.25V12.099h-32.5V32.198z M30.224,32.346H6.302\n" + "\t\t v-1.875h23.922V32.346z M30.224,27.596H6.302v-1.875h23.922V27.596z M19.8,20.971h10.424v1.875H19.8V20.971z M6.224,15.015h11.505v7.831H6.224V15.015z");
        svgCalendar.appendChild(calendar2);
    }
}

