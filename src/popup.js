import { displayProjects } from "./DisplayDOM";

// Edits project object on clicking edit div
function projectEditPopup(project, projects, projectDOM) {
    const modal = document.querySelector('#projectQueryModal');

    let input = modal.querySelector('input');
    input.setAttribute('value', `${project.title}`);

    modal.showModal();

    modal.addEventListener('submit', Submit, { once: true });

    function Submit(event) {
        // Prevent default form submit
        event.preventDefault();
    
        // Collecting user entries from FORM inputs
        let newTitle = modal.querySelector('#title').value;
        project.title = newTitle;
        
        // Clear the form fields
        modal.close();

        // Displays projects
        displayProjects(projects, projectDOM);
    }

    //Making functional close button
    const close = modal.querySelector('#closeProjectModal');

    close.addEventListener('click', () => {
        modal.close();  
    });
};

function todoEditPopup (todo) {
    const toEditProperty = prompt("Please enter the field you want to edit: title, description, dueDate or priority.")

}

export {projectEditPopup, todoEditPopup};
