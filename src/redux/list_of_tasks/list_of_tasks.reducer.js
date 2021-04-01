import {addItemToList, removeItemFromList} from './list_of_tasks.utils'

const INITIAL_STATE = {
    list_of_tasks : [],
}

export const taskListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_LIST_OF_TASKS':
            return {
                ...state,
                list_of_tasks: action.payload
            }
        case 'ADD_ITEM_TO_TASKS':
            return {
                ...state,
                list_of_tasks: addItemToList(state.list_of_tasks, action.payload)
            }
        case 'REMOVE_ITEM_FROM_TASKS':
            return {
                ...state,
                list_of_tasks: removeItemFromList(state.list_of_tasks, action.payload)
            }
        default:
            return state
    }
}