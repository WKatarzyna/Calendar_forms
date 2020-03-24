class PenIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgPen = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgPen.setAttribute("viewBox", "0 0 20 20");
        svgPen.id = params.id;
        parentNode.appendChild(svgPen);
        let pen = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pen.setAttribute("d", "M2.453,9.297C1.754,9.996,1,13.703,1,14c0,0.521,0.406,1,1,1c0.297,0,4.004-0.754,4.703-1.453l5.722-5.722l-4.25-4.25  L2.453,9.297z M12,1c-0.602,0-1.449,0.199-2.141,0.891L9.575,2.175l4.25,4.25l0.284-0.284C14.746,5.504,15,4.695,15,4  C15,2.343,13.656,1,12,1z");
        svgPen.appendChild(pen);
    }
}


