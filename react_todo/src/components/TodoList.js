import React, { Component } from 'react';
import TodoListRow from '../components/TodoListRow';
class TodoList extends Component{
  state={
    todo_item:[{id:'',title:'',description:'',createdon:'',modifiedon:''}],
    
  }

  componentWillMount()  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'OPTIONS');
    fetch('http://localhost:8080/api/toDo/', {method: 'GET', headers: headers})
    .then(res=>{return res.json();})
    .then((data)=>{
      let temp_data=[];
     data.map((td, index)=>{
        temp_data.push({'title':td.title,'description':td.description,'createdon':td.createdon,'modifiedon':td.modifiedon,'id':td.id})
        return true;
      });
      this.setState({todo_item:temp_data})
    })
        .catch(err=>console.error('Error:',err));
}

componentWillUpdate()  {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('GET', 'POST', 'OPTIONS');
  fetch('http://localhost:8080/api/toDo/', {method: 'GET', headers: headers})
  .then(res=>{return res.json();})
  .then((data)=>{
    let temp_data=[];
   data.map((td, index)=>{
      temp_data.push({'title':td.title,'description':td.description,'createdon':td.createdon,'modifiedon':td.modifiedon,'id':td.id})
      return true;
    });
    this.setState({todo_item:temp_data})
  })
      .catch(err=>console.error('Error:',err));
}

  render(){
   

    return(
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>description</th>
            <th>Created On</th>
            <th>Modified On</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
              { this.state.todo_item.map(item =>
              <TodoListRow key={item.id} item={item}/>
            )}
        </tbody>
      </table>
      
    );
  }
}
export default TodoList;