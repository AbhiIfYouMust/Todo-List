import {todoGenerator, projectGenerator} from "./todoGenerator";

const Projects = []

const Todo1 = todoGenerator("any","an important task","02/05/2022","Top priority");
const Todo2 = todoGenerator("this","task difficult","02/05/2021","Low priority");
const Todo3 = todoGenerator("top priority","task difficult","02/05/2021","TOP");


const defaults = projectGenerator("defaults");

defaults.TodoList.push(Todo1);
defaults.TodoList.push(Todo2);

const priority = projectGenerator("priority");

priority.TodoList.push(Todo3);

Projects.push(defaults);
Projects.push(priority);

Projects.forEach(function(project) {
    console.log(project.title);
    let Todos = project.TodoList;
    Todos.forEach(todo => console.log(todo));
})
