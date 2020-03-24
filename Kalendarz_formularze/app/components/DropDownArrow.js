class List {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let firstIcon = document.createElement("div");
        parentNode.appendChild(firstIcon);
        firstIcon.id = params.id;
        let svgArrowIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgArrowIcon.setAttribute("viewBox", "0 0 100 100");
        svgArrowIcon.classList.add("downMenu");
        firstIcon.appendChild(svgArrowIcon);
        let downArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
        downArrow.setAttribute("d", "M3.275,8C2.819,8,2.212,8.3,2.06,8.75c-0.152,0.45,0,0.9,0.304,1.35c3.343,4.8,9.725,9.6,9.725,9.6s0.304,0.3,0.907,0.3 c0.612,0,0.916-0.3,0.916-0.3s6.382-4.8,9.725-9.6c0.304-0.45,0.456-0.9,0.304-1.35C23.788,8.3,23.181,8,22.725,8H3.275z");
        svgArrowIcon.appendChild(downArrow);
        downArrow.id = "arrowDown";
    }
}