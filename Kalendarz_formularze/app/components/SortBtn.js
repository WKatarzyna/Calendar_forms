class SortBtn{
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }

    Create(params, parentNode) {
        let sortBtn = document.createElement("button");
        sortBtn.classList= params.class;
        sortBtn.id = params.id;
        sortBtn.textContent=params.textContent;
        sortBtn.setAttribute("data-sort", "name");
        parentNode.appendChild(sortBtn);
        sortBtn.addEventListener("click", sortList);
        function sortList() {
            let i, switching, list, shouldSwitch,
                previousElement, newElement,  mainList;
            switching = true;  //sortuj zawsze
            while (switching) {
                switching = false;
                list = document.getElementsByTagName("LI");
                for (i = 0; i < list.length - 1; i++) {
                    shouldSwitch = false;
                    mainList=list[i].parentNode;
                    newElement= list[i];
                    previousElement= list[i + 1];
                    if (list[i].innerHTML > list[i + 1].innerHTML) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch===true) {
                    mainList.insertBefore(previousElement,newElement);
                    switching = true; //switching na true zawsze sortuj
                }
            }
        }
    }
}