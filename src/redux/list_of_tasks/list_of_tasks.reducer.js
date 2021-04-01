import { AddItemToList, RemoveItemFromList } from "./list_of_tasks.utils";

const INITIAL_STATE = {
    list_of_tasks: [],
}

const list_of_tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_LIST_OF_TASKS':
            return {
                ...state,
                list_of_tasks: action.payload
            }
        case 'ADD-ITEM-TO-LIST':
            return {
                ...state,
                list_of_tasks: AddItemToList(state.list_of_tasks, action.payload),
            }
        case 'REMOVE-ITEM-FROM-LIST':
            return {
                ...state,
                list_of_tasks: RemoveItemFromList(state.list_of_tasks, action.payload),
            }
        default:
            return state;
    }
}

export default list_of_tasksReducer;