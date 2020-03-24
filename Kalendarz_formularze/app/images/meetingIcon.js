class MeetingIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgMeeting = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgMeeting.id = params.id1;
        parentNode.appendChild(svgMeeting);
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.id = "path1";
        path1.setAttribute("d", "M60,110 a25,30 0 1,0 -50,0");
        svgMeeting.appendChild(path1);
        const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.id = "circle1";
        circle1.setAttribute("cx", "35");
        circle1.setAttribute("cy", "60");
        circle1.setAttribute("r", "20");
        svgMeeting.appendChild(circle1);
        const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path3.id = "path3";
        path3.setAttribute("d", "M110,110 a25,30 0 1,0 -50,0");
        svgMeeting.appendChild(path3);
        const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle3.id = "circle3";
        circle3.setAttribute("cx", "85");
        circle3.setAttribute("cy", "60");
        circle3.setAttribute("r", "20");
        svgMeeting.appendChild(circle3);
        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.id = "path2";
        path2.setAttribute("d", "M85,120 a25,30 0 1,0 -50,0");
        svgMeeting.appendChild(path2);
        const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.id = "circle2";
        circle2.setAttribute("cx", "60");
        circle2.setAttribute("cy", "70");
        circle2.setAttribute("r", "22");
        svgMeeting.appendChild(circle2);
    }
}




