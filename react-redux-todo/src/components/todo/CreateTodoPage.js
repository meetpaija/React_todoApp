import React,{PropTypes} from 'react';

class CreateTodoPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:null,
            description:null
        };
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onSave=this.onSave.bind(this);
    }

    onTitleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    onSave(event){
        event.preventDefault(this);
        console.log(this.state.description);
    }

    render(){
        return(
            <div>
                <h1>Add Todo</h1>
                Title:
                <input type="text"
                onChange={this.onTitleChange}
                value={this.state.title}
                name="title"/><br/>
                Description:
                <input type="text"
                onChange={this.onTitleChange}
                value={this.state.description}
                name="description"/><br/>
                <input type="button"
                onClick={this.onSave}
                value="Save"/>

            </div>
        );
    }
}

export default CreateTodoPage;