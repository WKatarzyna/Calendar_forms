class ReturnIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgReturn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgReturn.setAttribute("viewBox", "0 0 1000 1000");
        svgReturn.id = params.id;
        parentNode.appendChild(svgReturn);
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', 'M71.3,327.7L413.8,643V452c103.7,0,367.8,2.2,367.8,262.1c0,136.1-100.9,249.6-234.9,275.9c215.4-28,382.1-202.9,382.1-416.7c0-397.3-443.5-400.7-515-400.7V10L71.3,327.7z');
        svgReturn.appendChild(path);
    }
}


