// Edits project object on clicking edit div
function projectEditPopup(project) {

    const newTitle = prompt("Please enter new title", `${project.title}`);
    if (newTitle === null) {
        return; //break out of the function early
    }
    project.title = newTitle;
};

function todoEditPopup (todo) {
    const toEditProperty = prompt("Please enter the field you want to edit: title, description, dueDate or priority.")

}

export {projectEditPopup, todoEditPopup};
