import {todoGenerator, projectGenerator} from "./objectGenerator";
import { deleteProject, deleteTodo } from "./delete";
import {displayTODOs, displayProjects} from "./DisplayDOM";
import { projectEditPopup } from "./popup";

// array to store all project(project is the file containing all TODOs)
const Projects = [];

// area of index.html where projects would be displayed
const ProjectDisplay = document.querySelector("#project-display");

// Default project file
const project0 = projectGenerator("Default");
Projects.push(project0);

// Test objects
const Todo1 = todoGenerator("home","things to do","22/03/2022","TOP");
const Todo2 = todoGenerator("class","things done","20/03/2022","MEDIUM");
const Todo3 = todoGenerator("room", "my room is mine", "12/12/2021","EASY");

project0.TodoList.push(Todo1);
project0.TodoList.push(Todo2);
project0.TodoList.push(Todo3);

// For initialization
displayProjects(Projects, ProjectDisplay);
let selectedProject = Projects[0];
let ToDisplayTODOs = selectedProject.TodoList;

// area of index.html where TODOs would be displayed
const TODODisplay = document.querySelector("#TODO-display");

displayTODOs(ToDisplayTODOs, TODODisplay);

// Triggers on clicking on project div and it's components
// Changes selectedProject and displays it's content or deletes a project or edits it
ProjectDisplay.addEventListener('click', function(event){
    if (event.target.className === 'project') {
        let requiredTitle = event.target.textContent;
        selectedProject = Projects.find(x => x.title === requiredTitle);

        ToDisplayTODOs = selectedProject.TodoList;

        displayTODOs(ToDisplayTODOs, TODODisplay);

    } else if (event.target.className === 'delete') {
        // In case the currently selected project is to be deleted
        if (selectedProject.TodoList === ToDisplayTODOs) {
            deleteProject(selectedProject, Projects);

            selectedProject = Projects[0];
            ToDisplayTODOs = selectedProject.TodoList;

            displayProjects(Projects, ProjectDisplay);
            displayTODOs(ToDisplayTODOs, TODODisplay);

        } else {
            deleteProject(selectedProject, Projects);
            displayProjects(Projects, ProjectDisplay);
        };
    } else if (event.target.className === 'edit') {

        // Finding selected edit button's parent div and associated object
        let requiredTitle = event.target.parentNode.textContent;
        selectedProject = Projects.find(x => x.title === requiredTitle);
 
        projectEditPopup(selectedProject);

        displayProjects(Projects, ProjectDisplay);
    };
});


//Triggers on clicking TODOdisplay components, deletes and edits it
TODODisplay.addEventListener('click', function(event) {
    if (event.target.className === "delete") {
        deleteTodo(event.target.parentNode, selectedProject);

        displayTODOs(ToDisplayTODOs, TODODisplay);
    };
});

const projectQuery = document.querySelector("#project-query");

// Triggers on hitting submit button on project div
projectQuery.addEventListener('submit', function(event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs
    let title = projectQuery.querySelector('#title').value;

    let project = projectGenerator(title);
    Projects.push(project);

    displayProjects(Projects, ProjectDisplay);

	// Clear the form fields
	event.target.reset();
});

const TODOquery = document.querySelector("#TODO-query");

// Triggers on hitting submit button on todo div
TODOquery.addEventListener('submit', function(event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs          
    let title = TODOquery.querySelector('#title').value;
    let description = TODOquery.querySelector('#description').value;
    let dueDate = TODOquery.querySelector('#dueDate').value;
    let priority = TODOquery.querySelector('#priority').value;

    let TODO = todoGenerator(title, description, dueDate, priority);

    selectedProject.TodoList.push(TODO);

    displayTODOs(selectedProject.TodoList, TODODisplay);

	// Clear the form fields
	event.target.reset();
});

// const project1 = projectGenerator("Default");
// const project2 = projectGenerator("Top priority");
// const project3 = projectGenerator("Home applications");

// const Todo1 = todoGenerator("home","things to do","22/03/2022","TOP");
// const Todo2 = todoGenerator("class","things done","20/03/2022","MEDIUM");
// const Todo3 = todoGenerator("room", "my room is mine", "12/12/2021","EASY");

// project1.TodoList.push(Todo1);
// project1.TodoList.push(Todo2);
// project1.TodoList.push(Todo3);

// Projects.push(project1);
// Projects.push(project2);
// Projects.push(project3);

// // Adds title of each project on DOM
// Projects.forEach(function(project) {
//     let projectDOM = projectDOMGenerator(project);
//     projectsDiv.appendChild(projectDOM);
// })

