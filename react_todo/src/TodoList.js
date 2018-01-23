import React, { Component } from 'react';
import TodoItem from '../src/TodoItem';
class TodoList extends Component{
  state={
    todo_item:[{id:'',title:'',description:'',createdon:'',modifiedon:''}]
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
    
    let rows=this.state.todo_item.map((item)=>
<div>
    <div className="list-group-item row edittodo" >
    <div  className="col-xs-5">
      <p className="list-group-item-text">title: {item.title}</p>
      <p className="list-group-item-text">description: {item.description}</p>
      <p className="list-group-item-text">created on: {item.createdon}</p>
      <p className="list-group-item-text">modified on: {item.modifiedon}</p> 
      </div>
     <div className="col-xs-1 "><button className="btn btn-primary btn-sm"  data-toggle="collapse" data-target="#data" ><span>Edit</span></button></div>
     
     <div className="col-xs-1 "><button className="btn btn-danger btn-sm" ><span>Delete</span></button></div>
     </div>

    
     <div className="collapse"  id="data" >
     <div className="list-group-item row">
     <div  className="col-xs-8">
       <label className="form-group-control">Title: </label><input className="list-group-item-text" value={item.title}></input><br/>
       <label>Description: </label><input className="list-group-item-text" value={item.description}></input><br/>
       <label>CreatedOn: </label><input className="list-group-item-text" value={item.createdon}></input><br/>
       <label>ModifiedOn: </label><input className="list-group-item-text" value={item.modifiedon}></input>
       </div>
      <div className="col-xs-3 text-right"><button className="btn btn-primary btn-sm" ng-mouseover="showEditRow(row)"><span>Save</span></button></div>
      </div>
      </div>
</div>
    );
    return(
      <div className="container" >
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          
                      <h2>List of toDos</h2>
                      <div className="list-group"  data-toggle="modal" data-target="#myModal">
                      {rows}     
                      </div>
                      {/* <TodoItem todos={this.state.todo_item}/> */}
      </div>
      
    );
  }
}
export default TodoList;