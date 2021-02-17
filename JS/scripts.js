//selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event) {
    event.preventDefault();

//todo DIV
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

//todo LI 
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo_item');
todoDiv.appendChild(newTodo);
if(todoInput.value === ""){
    return null
}