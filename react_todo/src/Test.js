import React, { Component } from 'react';
import moment from 'moment';

class Background extends Component{
  state={todos:[]}
  componentWillMount()  {
                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
              
                headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            
                headers.append('GET', 'POST', 'OPTIONS');

                fetch('http://localhost:8080/api/toDo', {method: 'GET', headers: headers})
                .then(res=>{return res.json();})
                .then((data)=>{
                  
                let todo=data.map((td, index)=>{
                          this.setState();
                            return(
                              <div key={index} >
                              <div className="list-group-item">
                              
                              <p className="list-group-item-text">Id: {td.id}</p>
                              <p className="list-group-item-text">title: {td.title}</p>
                              <p className="list-group-item-text">description: {td.description}</p>
                              <p className="list-group-item-text">created on: {td.createdon}</p>
                              <p className="list-group-item-text">modified on: {td.modifiedon}</p>
                              </div>

                              
                              </div>
                            )
                      })
                      this.setState({todos:todo});
                    })
                    .catch(err=>console.error('Error:',err));
  }

  componentWillUpdate(){
            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
          
            headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        
            headers.append('GET', 'POST', 'OPTIONS');

            fetch('http://localhost:8080/api/toDo', {method: 'GET', headers: headers})
            .then(res=>{return res.json();})
            .then((data)=>{
              
                  let todo=data.map((td, index)=>{
                        return(
                            <div className="list-group-item" key={index}>
                              
                               <p className="list-group-item-text">Id: {td.id}</p>
                              <p className="list-group-item-text">title: {td.title}</p>
                              <p className="list-group-item-text">description: {td.description}</p>
                              <p className="list-group-item-text">created on: {td.createdon}</p>
                              <p className="list-group-item-text"></p> 
                              
                             </div>
                        )
                  })
                  this.setState({todos:todo});
          
                })
                .catch(err=>console.error('Error:',err));
          
  }

  render(){
        return(
          
            <div className="container" >
                      <h2>List of toDos</h2>
                      <div className="list-group"  data-toggle="modal" data-target="#myModal">
                      {this.state.todos}
                      </div>
                      {/* <div class="modal fade" id="myModal" role="dialog">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Edit Details..</h4>
                                  </div>
                                  <div class="modal-body">
                                    <p>Some text in the modal.</p>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Save</button>
                                  </div>
                                </div>
                                
                              </div>
                              </div> */}
                      
              </div>




        )
}
}

 class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            titledes:'',
            desc:''
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        };

        handleSubmit(event) {
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
        };


        handleChange(event) {
          this.setState({[event.target.id]: event.target.value});
        };

        render() {
          return (
            <div className="App">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
              <div className="container-fluid ">    
                <div className="row content" >
                  <div className="col-sm-4 sidenav"> 
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
                  <div className="col-sm-2 " >
                      <div>
                        <Background/> 
                      </div>
                  </div>
                </div>
            </div>
          </div>
          );
        }
  
}

export default App;




let todo=data.map((td, index)=>{
    this.setState();

    

      return(
        <div key={index} >
        <div className="list-group-item">
        <p className="list-group-item-text">Id: {td.id}</p>
        <p className="list-group-item-text">title: {td.title}</p>
        <p className="list-group-item-text">description: {td.description}</p>
        <p className="list-group-item-text">created on: {td.createdon}</p>
        <p className="list-group-item-text">modified on: {td.modifiedon}</p>
        </div>
       </div>
      )
})

