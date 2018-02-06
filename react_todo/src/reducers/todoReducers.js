import * as types from '../actions/actionTypes'
export default function todoReducers(state = [], action) {

    switch (action.type) {
        case types.CREATE_TODO:
            state = [...state, ...action.todo];
           return state;

        case types.LOAD_TODO:
            return [...state, ...action.todos];

        case types.EDIT_TODO:
            state=[...state, ...action.new_todo];   
            return state;

        case types.DELETE_TODO:
            return [...state,...action.todo];

        default:
            return state;
    }
}