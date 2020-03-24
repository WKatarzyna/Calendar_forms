class TaskButtons {
    constructor(params, parentNode) {
        this.Create(params, parentNode);
    }
    Create(params, parentNode) {
        let meetingBtn = document.createElement("button");
        meetingBtn.id = params.id1;
        meetingBtn.classList = params.class;
        meetingBtn.textContent = params.textContent;
        parentNode.appendChild(meetingBtn);
    }
}
