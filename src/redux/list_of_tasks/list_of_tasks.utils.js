export const addItemToList = (list_of_tasks,new_item) => {
        let new_task = [
            ...list_of_tasks,
            new_item
        ];
        return new_task
}

export const removeItemFromList = (list_of_tasks, index) => {
    let new_tasks = [
        ...list_of_tasks
    ];
    new_tasks.splice(index, 1);
    return new_tasks
}