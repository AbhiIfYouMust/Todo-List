import {todoGenerator, projectGenerator} from "./objectGenerator";
import {todoDOMGenerator, projectDOMGenerator} from "./DOM";

// array to store all project(project is the file containing all TODOs)
const Projects = [];

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

const projectsDiv = document.querySelector("#projects");

// Adds title of each project on DOM
Projects.forEach(function(project) {
    let projectDOM = projectDOMGenerator(project);
    projectsDiv.appendChild(projectDOM);
})

const TODODiv = document.querySelector("#TODOs");

let selectedProject = Projects[0];

let DisplayTODOs = selectedProject.TodoList;

// Adds TODOs of selected project on DOM
DisplayTODOs.forEach(function(TODO) {
    let TODOdom = todoDOMGenerator(TODO); 
    TODODiv.appendChild(TODOdom);
})
