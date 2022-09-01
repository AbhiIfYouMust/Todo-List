// This module creates DOM element
let deleteDiv = document.createElement("div");
deleteDiv.classList.add("delete");

let editDiv = document.createElement("div");
editDiv.classList.add("edit");

function projectDOMGenerator(projectObject) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    let paragraph = document.createElement("p");
    projectDiv.appendChild(paragraph);

    paragraph.textContent = `${projectObject.title}`;

    projectDiv.appendChild(deleteDiv.cloneNode(true));
    projectDiv.appendChild(editDiv.cloneNode(true));

    return projectDiv;
}

function todoDOMGenerator(todoObject) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    let paragraph = document.createElement("p");
    todoDiv.appendChild(paragraph);

    paragraph.textContent = `${todoObject.title},  ${todoObject.description},   ${todoObject.dueDate},   ${todoObject.priority}`;

    todoDiv.appendChild(deleteDiv.cloneNode(true));
    todoDiv.appendChild(editDiv.cloneNode(true));

    return todoDiv;
}

export {projectDOMGenerator, todoDOMGenerator};

