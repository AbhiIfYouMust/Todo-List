function deleteProject(project, projects) {
    const index = projects.indexOf(project);

    if (index === 0) {
        projects.shift();
    } else {
        projects.splice(index, 1);
    }
}

function deleteTodo(Todo, project) {
    
    // Splits text content of Todo div on "," and stores the 0th index item, the title
    const requiredTitle = Todo.textContent.split(',')[0];

    // Finds object of associated with the requiredTitle
    const object = project.TodoList.find(x => x.title === requiredTitle);

    const index = project.TodoList.indexOf(object);

    if (index === 0) {
        project.TodoList.shift();
    } else {
        project.TodoList.splice(index, 1);
    }
}

export {deleteProject, deleteTodo};

