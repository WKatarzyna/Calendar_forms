class AddBtn {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let addBtn = document.createElement("button");
        addBtn.classList = params.class;
        addBtn.textContent = params.textContent;
        addBtn.id = params.id;
        addBtn.setAttribute("data-sort", "name");
        parentNode.appendChild(addBtn);
        addBtn.addEventListener("click", function () {
            let participantInput = document.createElement("input");
            let list = document.getElementsByTagName('ul');
            let listElement = document.createElement("li");
            participantInput.type = "checkbox";
            participantInput.setAttribute('required', 'true');
            participantInput.id = "firstInput";
            listElement.classList.add("userList");
            listElement.classList.add("user__list__item");
            let inputChange = document.querySelector(".addInput");
            if (inputChange.value === "" || inputChange.value === null || inputChange.value === undefined) {
                return false;
            } else {
                let name = inputChange.value;
                listElement.textContent = name.charAt(0).toUpperCase() + name.slice(1);
                listElement.append(participantInput);
                list[0].appendChild(listElement);
                inputChange.value = "";
                document.querySelectorAll('LI').forEach(el => el.addEventListener("click", function (e) {
                    page.CreateContactDetails(e);
                }));


            }
        });

    }

}
