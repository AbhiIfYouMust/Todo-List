import { displayProjects } from "./DisplayDOM";

// Edits project object on clicking edit div
function projectEditPopup(project, projects, projectDOM) {
    const modal = document.querySelector('#projectQueryModal');

    modal.querySelector('#title').value = project.title;
    modal.showModal();
            
    modal.addEventListener('cancel', (event) => {
        event.preventDefault();
    });

    modal.addEventListener('submit', Submit, { once: true });

    function Submit(event) {
        // Prevent default form submit
        event.preventDefault();

        // Collecting user entries from FORM inputs
        let newTitle = modal.querySelector('#title').value;

        // case in which user decides to use old name
        if (newTitle === project.title) {
            project.title = newTitle;
        } else if (projects.some((proj) => newTitle === proj.title)) {
            alert("Don't make duplicates you wanker!");
        } else {
            project.title = newTitle;
        }

        modal.close();

        modal.querySelector('#title').value = '';

        // Displays projects
        displayProjects(projects, projectDOM);
    }
};

function todoEditPopup (todo) {
    const toEditProperty = prompt("Please enter the field you want to edit: title, description, dueDate or priority.")
}

export {projectEditPopup, todoEditPopup};