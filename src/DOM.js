// This module creates DOM element
function projectDOMGenerator(projectObject) {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.textContent = `${projectObject.title}`;
    return projectDiv;
}

function todoDOMGenerator(todoObject) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    todoDiv.textContent = `${todoObject.title},  ${todoObject.description},   ${todoObject.dueDate},   ${todoObject.priority}`;
    return todoDiv;
}

export {projectDOMGenerator, todoDOMGenerator};