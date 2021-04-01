const INITIAL_STATE = {
    new_item: '',
}

const newItemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_NEW_ITEM':
            return {
                ...state,
                new_item: action.payload
            }
        default:
            return state
    }
}

export default newItemReducer