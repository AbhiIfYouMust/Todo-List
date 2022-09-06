// This module creates DOM element
let deleteDiv = document.createElement("button");
deleteDiv.classList.add("delete");

let editDiv = document.createElement("button");
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

    // Changes from DD-MM-YYYY if date in YYYY/MM/DD
    function ChangeDateFormat (date) {
        if (date.includes("/")) {
            const dateArray = date.split('/');
            [dateArray[0], dateArray[2]] = [dateArray[2], dateArray[0]];
            return dateArray.join('-');
        }
        else {
            return date;
        };  
    };

    paragraph.textContent = `${todoObject.title},  ${todoObject.description},   ${ChangeDateFormat(todoObject.dueDate)},   ${todoObject.priority}`;

    todoDiv.appendChild(deleteDiv.cloneNode(true));
    todoDiv.appendChild(editDiv.cloneNode(true));

    return todoDiv;
}

export {projectDOMGenerator, todoDOMGenerator};

