export const setTaskList = tasklist => ({
    type : 'SET_LIST_OF_TASKS',
    payload : tasklist,
})

export const addToList = item => ({
    type : 'ADD_ITEM_TO_TASKS',
    payload : item,
})

export const removeFromList = id => ({
    type : 'REMOVE_ITEM_FROM_TASKS',
    payload : id
})
