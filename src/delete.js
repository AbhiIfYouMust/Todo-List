function deleteProject(project, projects) {
    const index = projects.indexOf(project);

    if (index === 0) {
        projects.shift();
    } else {
        projects.splice(index, 1);
    }
}

export {deleteProject};

