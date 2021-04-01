export const setTasksList = (list_of_tasks) => ({
    type : 'SET_LIST_OF_TASKS',
    payload : list_of_tasks
});

export const addTaskToList = (new_item) => ({
    type : 'ADD-ITEM-TO-LIST',
    payload : new_item
})

export const removeTaskFromList = (id) => ({
    type : 'REMOVE-ITEM-FROM-LIST',
    payload : id
})
