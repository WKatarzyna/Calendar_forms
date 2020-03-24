class TaskTile {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let taskTile1 = document.createElement("div");
        taskTile1.id = params.id1;
        taskTile1.classList = params.class;
        taskTile1.classList.add('tile');
        taskTile1.textContent = params.textContent1;
        parentNode.appendChild(taskTile1);
        let taskTile2 = document.createElement("div");
        taskTile2.textContent = params.textContent2;
        taskTile2.id = params.id2;
        taskTile2.classList = params.class;
        taskTile2.classList.add('tile');
        parentNode.appendChild(taskTile2);
        let taskTile3 = document.createElement("div");
        taskTile3.textContent = params.textContent3;
        taskTile3.id = params.id3;
        taskTile3.classList = params.class;
        taskTile3.classList.add('tile');
        parentNode.appendChild(taskTile3);
        let taskTile4 = document.createElement("div");
        taskTile4.textContent = params.textContent4;
        taskTile4.id = params.id4;
        taskTile4.classList = params.class;
        taskTile4.classList.add('tile');
        parentNode.appendChild(taskTile4);
    }
}

