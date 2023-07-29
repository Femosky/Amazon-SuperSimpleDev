const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
        output.innerHTML = todoListHTML;
    }
}


function addTodo() {
    const output = document.querySelector('.output');
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);

    inputElement.value = '';

    renderTodoList();
}