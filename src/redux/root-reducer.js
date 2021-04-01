import {combineReducers} from 'redux'
import { taskListReducer } from './list_of_tasks/list_of_tasks.reducer'
import newItemReducer from './new_item/new_item.reducer';

const rootReducer = combineReducers({
    task_list: taskListReducer,
    new_item_value: newItemReducer,
})

export default rootReducer;