import React, { Component } from 'react';
class DeleteTODO extends Component{

    deleteTodo=(e)=>{
        let headers=new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('GET', 'POST','DELETE', 'OPTIONS');

        fetch(`http://localhost:8080/api/toDo/${this.props.item.id}`, {
                  method: "DELETE",
                  headers: headers,
                }).then((res) => {
                  console.log("this is res", res.url)
                }).catch((err) => {
                  console.log(err)
                })
            
                e.preventDefault();

                console.log("deleted");
    }

    render(){
        return(
           <td><button className="btn btn-danger btn-sm"  id={this.props.item.id} onClick={this.deleteTodo.bind(this)}>Delete</button></td>
       );
    }
}
export default DeleteTODO