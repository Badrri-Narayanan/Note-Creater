import { combineReducers } from 'redux'

import list_of_tasksReducer from './list_of_tasks/list_of_tasks.reducer'
import newItemReducer from './new_item/new_item.reducer';

const rootReducer = combineReducers({
    taskslist: list_of_tasksReducer,
    newItem: newItemReducer
});

export default rootReducer;
