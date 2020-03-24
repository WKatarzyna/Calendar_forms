class SearchInput {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let searchInput = document.createElement("input");
        searchInput.id = params.id;
        searchInput.placeholder = params.placeholder;
        searchInput.classList = params.class;
        parentNode.appendChild(searchInput);
        searchInput.onkeyup = function myFunction() {
            let input, filter;
            input = document.querySelector(".searchInput");
            filter = input.value.toUpperCase().trim();
            let listElement = document.getElementsByTagName("LI");
            for (let i = 0; i < listElement.length; i++) {
                if (listElement[i].textContent.charAt(0).includes(filter)) {
                    listElement[i].style.display = "block";
                } else {
                    listElement[i].style.display = "none";
                }
            }
        };
    }
}