import { todoDOMGenerator, projectDOMGenerator } from "./DOM";

function displayTODOs(TODOlist, node) {
    node.innerHTML = "";

    TODOlist.forEach(element => {
        let TodoDom = todoDOMGenerator(element);
        node.appendChild(TodoDom);
    });
};

function displayProjects(Projects, node) {
    node.innerHTML = "";
    
    Projects.forEach(element => {
        let ProjectDOM = projectDOMGenerator(element);
        node.appendChild(ProjectDOM);
    });
};

export {displayTODOs, displayProjects};