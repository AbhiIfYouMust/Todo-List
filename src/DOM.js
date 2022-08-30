const todoDiv = document.createElement('div');
todoDiv.classList.add = "todo";

function todoDOM(todoObject) {
    todoDiv.textContent = `${todoObject.title},  ${todoObject.description},   ${todoObject.dueDate},   ${todoObject.priority}`;
    return todoDiv;
}

export default todoDOM;