import * as types from './actionTypes'
import { updateTodo } from '../api/ApiUpdate';
import { delTodoApi } from '../api/ApiDelete';
import { addTodo } from '../api/ApiCreate';

export function loadTodo(todos){
    return {type:types.LOAD_TODO,todos}
}

export function createTodo(todo){
    addTodo(todo);
    return{type:types.CREATE_TODO,todo,}
} 

export function editTodo(todo){
    let new_todo=updateTodo(todo);
    return{type:types.EDIT_TODO,new_todo}
}

export function deleteTodo(todo){
    delTodoApi(todo);
    return{type:types.DELETE_TODO,todo}
}

export function loadTodos() {
    return function(dispatch) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('GET', 'POST', 'OPTIONS');
        fetch('http://localhost:8080/api/toDo/', { method: 'GET', headers: headers })
        .then(res => res.json())
        .then((data)=>{
               //data.map((td, index)=>( temp_data.push(td)));
                dispatch(loadTodo(data));
            })
            .catch(err => console.error('Error:', err));
    };
  }