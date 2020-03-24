class EmailIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgEmail = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEmail.id = params.id;
        svgEmail.setAttribute("viewBox", "0 0 96.264 96.264");
        parentNode.appendChild(svgEmail);
        const emailIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
        emailIcon.setAttribute("d", "M94.264,17.132H2c-1.104,0-2,0.896-2,2v58c0,1.104,0.896,2,2,2h92.264c1.104,0,2-0.896,2-2v-58\n" +
            "\t\tC96.264,18.028,95.367,17.132,94.264,17.132z M90.929,34.825c0,0.548-0.299,1.052-0.778,1.315l-41.29,22.61\n" +
            "\t\tc-0.225,0.123-0.473,0.185-0.721,0.185s-0.496-0.062-0.721-0.184L6.115,36.141c-0.481-0.263-0.78-0.768-0.78-1.316v-7.55\n" +
            "\t\tc0-0.525,0.274-1.011,0.724-1.283c0.447-0.271,1.008-0.29,1.472-0.046l39.684,20.762c0.552,0.29,1.301,0.289,1.855-0.001\n" +
            "\t\tl39.664-20.76c0.463-0.244,1.021-0.226,1.472,0.046c0.448,0.272,0.724,0.758,0.724,1.283L90.929,34.825L90.929,34.825z");
        svgEmail.appendChild(emailIcon);
    }
}

