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

function showForm(){
    let bgForm = document.getElementsByClassName('view-form')[0];
    let transparent = document.getElementsByClassName('transparent')[0];
    bgForm.classList.add('d-block');
    transparent.addEventListener('click', () => {
        bgForm.classList.remove('d-block');
    });
}