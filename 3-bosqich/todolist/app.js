const todo = document.querySelector('.todo');
const todoInput = document.querySelector('.todo_input');
const todoBtn = document.querySelector('.todo_btn');
const todolist = document.querySelector('.todo-list')

todoBtn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = todoInput.value;
    todolist.appendChild(li)
})