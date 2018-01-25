import React from 'react';
import moment from 'moment'

class EditTODO extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:this.props.item.title,
            description:this.props.item.description
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit=(e)=>{
        let headers=new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded');
              headers.append('Accept', 'application/json');
              headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
              headers.append('GET', 'PUT', 'OPTIONS');
              
              let myDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
              
              var details = {
                'title': this.state.title,
                'description':this.state.description,
                'createdon':this.props.item.createdon,
                'modifiedon':myDate,
              };
              var formBody = [];
              
              for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
              }
              formBody = formBody.join("&");

                fetch(`http://localhost:8080/api/toDo/${this.props.item.id}?`+formBody, {
                  method: "PUT",
                  headers: headers,
                }).then((res) => {
                  console.log("this is res", res.url)
                }).catch((err) => {
                  console.log(err)
                })
                e.preventDefault();
    }

   render()
   {
       return(
        <td><button className="btn btn-primary btn-sm"  id={this.props.item.id} data-toggle="modal" data-target={`#${this.props.item.id}myModal`} >Edit</button>
            <div id={`${this.props.item.id}myModal`} className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Edit todo</h4>
                </div>
                <div className="modal-body">
                   <div> Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input></div><br/>
                    <div>Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input></div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleSubmit} data-dismiss="modal">Save</button>
                </div>
                </div>

            </div>
            </div>
        </td>
        
       );
   }
}
export default EditTODO;