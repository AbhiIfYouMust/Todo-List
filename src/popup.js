import { displayProjects, displayTODOs } from "./DisplayDOM";

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

function todoEditPopup (todo, todoList, todoDOM) {
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
    }

    const modal = document.querySelector('#todoQueryModal');

    // Putting pre-existing data of TODO 
    modal.querySelector('#title').value = todo.title;
    modal.querySelector('#description').value = todo.description;
    modal.querySelector('#dueDate').value = ChangeDateFormat(todo.dueDate);
    modal.querySelector('select').value = todo.priority;

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
        let newDescription = modal.querySelector('#description').value;
        let newDueDate = modal.querySelector('#dueDate').value;
        let newPriority = modal.querySelector('#priority').value;
    

        // case in which user decides to use old name
        if (newTitle === todo.title) {
            todo.title = newTitle;
            todo.description = newDescription;
            todo.dueDate = newDueDate;
            todo.priority = newPriority;

        } else if (todoList.some((TODO) => newTitle === TODO.title)) {
            alert("Don't make duplicates you wanker!");
        } else {
            todo.title = newTitle;
            todo.description = newDescription;
            todo.dueDate = newDueDate;
            todo.priority = newPriority;
        }

        modal.close();

        modal.querySelector('#title').value = '';
        modal.querySelector('#title').value = '';
        modal.querySelector('#description').value = '';
        modal.querySelector('#dueDate').value = '';
        modal.querySelector('select').value = '';

        displayTODOs(todoList, todoDOM);
    }

}

export {projectEditPopup, todoEditPopup};