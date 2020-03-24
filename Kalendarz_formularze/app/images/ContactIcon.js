class ContactIcon {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let svgContact = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgContact.id = params.id;
        svgContact.setAttribute("viewBox", "0 0 442 442");
        parentNode.appendChild(svgContact);
        const contactIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
        contactIcon.setAttribute("d", "M105.4,221c0,9.391-7.609,17-17,17h-34c-9.391,0-17-7.609-17-17l0,0c0-9.391,7.609-17,17-17h34\n" +
            "\t\tC97.792,204,105.4,211.609,105.4,221L105.4,221z M105.4,112.2c0-9.391-7.609-17-17-17h-34c-9.391,0-17,7.609-17,17l0,0\n" +
            "\t\tc0,9.391,7.609,17,17,17h34C97.792,129.2,105.4,121.591,105.4,112.2L105.4,112.2z M105.4,329.801c0-9.393-7.609-17-17-17h-34\n" +
            "\t\tc-9.391,0-17,7.607-17,17l0,0c0,9.391,7.609,17,17,17h34C97.792,346.801,105.4,339.191,105.4,329.801L105.4,329.801z M404.6,54.4\n" +
            "\t\tv333.2c0,30.043-24.357,54.4-54.398,54.4h-238c-30.042,0-54.4-24.357-54.4-54.4V360.4h30.6c16.871,0,30.6-13.73,30.6-30.6\n" +
            "\t\tc0-16.871-13.729-30.602-30.6-30.602H57.8v-47.6h30.6c16.871,0,30.6-13.729,30.6-30.6s-13.729-30.6-30.6-30.6H57.8v-47.6h30.6\n" +
            "\t\tc16.871,0,30.6-13.729,30.6-30.6c0-16.871-13.729-30.6-30.6-30.6H57.8V54.4c0-30.042,24.358-54.4,54.4-54.4h238\n" +
            "\t\tC380.242,0,404.6,24.357,404.6,54.4z M188.945,161.255c0,28.968,23.487,52.455,52.455,52.455c28.969,0,52.455-23.487,52.455-52.455\n" +
            "\t\tc0-28.968-23.486-52.456-52.455-52.456C212.433,108.8,188.945,132.287,188.945,161.255z M323,289.482\n" +
            "\t\tc0-32.184-26.098-58.283-58.283-58.283H218.09c-32.191,0-58.29,26.1-58.29,58.283v23.318H323V289.482z");
        svgContact.appendChild(contactIcon);
    }
}
