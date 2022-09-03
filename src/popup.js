import { displayProjects } from "./DisplayDOM";

// Edits project object on clicking edit div
function projectEditPopup(project, projects, projectDOM) {
    const modal = document.querySelector('#projectQueryModal');

    let input = modal.querySelector('input');
    input.setAttribute('value', `${project.title}`);

    modal.showModal();

    modal.addEventListener('submit', function(event) {
        // Prevent default form submit
        event.preventDefault();
    
        // Collecting user entries from FORM inputs
        let newTitle = modal.querySelector('#title').value;
        project.title = newTitle;
        
        // Clear the form fields
        modal.close();

        displayProjects(projects, projectDOM);
        return;
    });

    //Making functional close button
    const close = modal.querySelector('#closeProjectModal');

    close.addEventListener('click', () => {
        modal.close();
        return;
    });
};

export {projectEditPopup};