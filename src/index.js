import {todoGenerator, projectGenerator} from "./objectGenerator";
import {todoDOMGenerator, projectDOMGenerator} from "./DOM";

// array to store all project(project is the file containing all TODOs)
const Projects = [];

const projectsDiv = document.querySelector("#projects");

// Default project file
const project0 = projectGenerator("Default");
Projects.push(project0);

// Adding default to DOM
let projectDOM0 = projectDOMGenerator(project0);
projectsDiv.appendChild(projectDOM0);

let selectedProject = Projects[0];

// Triggers on hitting submit button on project div
projectsDiv.addEventListener('submit', function(event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs
    let title = projectsDiv.querySelector('#title').value;

    let project = projectGenerator(title);
    Projects.push(project);

    let projectDOM = projectDOMGenerator(project);
    projectsDiv.appendChild(projectDOM);

	// Clear the form fields
	event.target.reset();
});

const TODODiv = document.querySelector("#TODOs");

// Triggers on hitting submit button on todo div
TODODiv.addEventListener('submit', function(event) {
	// Prevent default form submit
	event.preventDefault();

    // Collecting user entries from FORM inputs          
    let title = TODODiv.querySelector('#title').value;
    let description = TODODiv.querySelector('#description').value;
    let dueDate = TODODiv.querySelector('#dueDate').value;
    let priority = TODODiv.querySelector('#priority').value;

    let TODO = todoGenerator(title, description, dueDate, priority);

    console.log(TODO);
    selectedProject.TodoList.push(TODO);

    let TODOdom = todoDOMGenerator(TODO);
    TODODiv.appendChild(TODOdom);

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
