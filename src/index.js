import {todoGenerator, projectGenerator} from "./objectGenerator";
import {todoDOMGenerator, projectDOMGenerator} from "./DOM";

// array to store all project(project is the file containing all TODOs)
const Projects = [];

const projectsDiv = document.querySelector("#projects");

// Default project file
const project0 = projectGenerator("Default");
Projects.push(project0);

const Todo1 = todoGenerator("home","things to do","22/03/2022","TOP");
const Todo2 = todoGenerator("class","things done","20/03/2022","MEDIUM");
const Todo3 = todoGenerator("room", "my room is mine", "12/12/2021","EASY");

project0.TodoList.push(Todo1);
project0.TodoList.push(Todo2);
project0.TodoList.push(Todo3);

// Adding default to DOM
let projectDOM0 = projectDOMGenerator(project0);
projectsDiv.appendChild(projectDOM0);

let selectedProject = Projects[0];

const TODODisplay = document.querySelector("#TODO-display");

let DisplayTODOs = selectedProject.TodoList;

DisplayTODOs.forEach(element => {
    let TodoDom = todoDOMGenerator(element);
    TODODisplay.appendChild(TodoDom);
});


// Triggers on clicking on project div
// Changes selectedProject and displays it's content
projectsDiv.addEventListener('click', function(event){
    if (event.target.className === 'project') {
        let requiredTitle = event.target.textContent;
        selectedProject = Projects.find(x => x.title === requiredTitle);

        DisplayTODOs = selectedProject.TodoList;

        //Empties div before populating to avoid duplicates
        TODODisplay.innerHTML = "";

        // Displays TODOs
        DisplayTODOs.forEach(element => {
            let TodoDom = todoDOMGenerator(element);
            TODODisplay.appendChild(TodoDom);
        });
    };
})

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

    let TODOdom = todoDOMGenerator(TODO);
    TODODisplay.appendChild(TODOdom);

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
