import React, { Component } from 'react';
import moment from 'moment';

class CreateTODO extends Component{

  constructor(props) {
    super(props);
    this.state = {
      titledes:'',
      desc:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  };

  handleSubmit(event){
              let headers=new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded');
              headers.append('Accept', 'application/json');
              headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
              headers.append('GET', 'POST', 'OPTIONS');
              
              let myDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
              
              var details = {
                'title': this.state.titledes,
                'description':this.state.desc,
                'createdon':myDate,
                'modifiedon':myDate,
              };
              var formBody = [];
              
              for (var property in details) {
                console.log(property);
                console.log(details[property]);
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
              }
              formBody = formBody.join("&");
              console.log(formBody);

                fetch('http://localhost:8080/api/toDo?'+formBody, {
                  method: "POST",
                  headers: headers,
                }).then((res) => {
                  console.log("this is res", res.url)
                }).catch((err) => {
                  console.log(err)
                })
                event.preventDefault();
  }

    render(){
            return(
                <div>
                   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                    <h1 className="header">Create toDo</h1><hr/>
                              <div className="form-group">
                                  <label>title</label>
                                  <input type="text" id="titledes" className="form-control" value={this.state.titledes} onChange={this.handleChange} />
                              </div>
                              <div className="form-group">
                                  <label >Description</label>
                                  <textarea className="form-control" id="desc" onChange={this.handleChange} rows="3" value={this.state.desc}></textarea> 
                              </div>
                              <input type="button" onClick={this.handleSubmit} className="btn btn-info" value="Submit" />
                </div>
            );
    }
}

export default CreateTODO;