import * as types from '../actions/actionTypes'
export default function todoReducers(state = [], action) {

    switch (action.type) {
        case types.CREATE_TODO:
            state = [...state,...action.todo];
            return state;

        case types.LOAD_TODO:
            return [...state, ...action.todos];

        case types.EDIT_TODO:
           return [...state.filter((todo)=>todo.id!==action.new_todo.id),Object.assign({},action.new_todo)]

        case types.DELETE_TODO:
            return [...state.filter((todo)=>todo.id!==action.todo.id)];

        default:
            return state;
    }
}