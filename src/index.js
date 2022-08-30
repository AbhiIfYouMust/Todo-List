import {todoGenerator, projectGenerator} from "./todoGenerator";
import todoDOM from "./DOM";

const Projects = []

let Todo1 = todoGenerator("any","something","02/02/2077","TOP");

const domElement = todoDOM(Todo1);

const body = document.querySelector("body");

body.appendChild(domElement);

Projects.forEach(function(project) {
    console.log(project.title);
    let todoAll = project.TodoList;
    todoAll.forEach(todo => console.log(todo));
})
