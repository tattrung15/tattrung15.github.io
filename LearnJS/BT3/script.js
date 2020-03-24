let issue = {
    id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'high',
    allowFor: ['back_end', 'front_end', 'function_test', 'performance_test'],
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
};

function showInfo(){
    let info = document.getElementById('info');
    info.innerHTML = JSON.stringify(issue, null, 4);
}

function closeForm(){
    let bgForm = document.getElementsByClassName('view-form')[0];
    bgForm.classList.remove('d-block');
}

function showForm(){
    let bgForm = document.getElementsByClassName('view-form')[0];
    let transparent = document.getElementsByClassName('transparent')[0];

    bgForm.classList.add('d-block');

    transparent.addEventListener('click', () => {
        bgForm.classList.remove('d-block');
    });

    document.frm.title.value = issue.title;
    document.frm.description.value = issue.description;
    document.frm.type.value = issue.type;
    document.frm.priority.value = issue.priority;
    document.frm.createdBy.value = issue.createdBy;
    document.frm.assignee.value = issue.assignee;
    document.frm.estimate.value = issue.estimate;
    document.frm.state.value = issue.state;
    for(let i = 0; i < issue.allowFor.length; i++){
        document.getElementById(issue.allowFor[i]).checked = true;
    }

}

function saveChanges(){
    let info = document.getElementById('info');

    issue.title = document.frm.title.value;
    issue.description = document.frm.description.value;
    issue.type = document.frm.type.value;
    issue.priority = document.frm.priority.value;
    issue.allowFor = getAllowFor();
    issue.createdBy = document.frm.createdBy.value;
    issue.assignee = document.frm.assignee.value;
    issue.estimate = document.frm.estimate.value;
    issue.state = document.frm.state.value;
    info.innerHTML = JSON.stringify(issue, null, 4);

    closeForm();
}

function getAllowFor(){
    let allowFor = [];

    document.frm.allowFor.forEach(item => {
        if(item.checked){
            allowFor.push(item.value);
        }
    });
    return allowFor;
}