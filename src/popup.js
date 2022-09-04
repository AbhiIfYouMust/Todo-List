import { displayProjects } from "./DisplayDOM";

// Edits project object on clicking edit div
function projectEditPopup(project) {

    let newTitle = prompt("Please enter new title", `${project.title}`);
    project.title = newTitle;
};

export {projectEditPopup};