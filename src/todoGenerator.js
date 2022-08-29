function todoGenerator(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };
};

function projectGenerator(title) {
    return {
        title: title,
        TodoList : []
    };
};

export  {todoGenerator, projectGenerator};