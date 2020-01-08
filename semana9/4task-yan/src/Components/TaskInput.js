import React from 'react';
import { connect } from 'react-redux';
import { addTaskActionCreator } from '../Actions/index'

class TaskInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            taskValue: ""
        }
    }
    onChangeInput = event =>{
        
        this.setState({taskValue: event.target.value})
    }

    onCreateTask = event =>{
        if(event.key === "Enter"){
            this.props.createTask(this.state.taskValue)
            this.setState({taskValue: ""})
        }
        
        
    }
    
    render(){
        return(
            <div>
                <input 
                onChange={this.onChangeInput} 
                onKeyDown={this.onCreateTask} 
                placeholder=" O que tem que ser feito?"
                value={this.state.taskValue}
                />
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    createTask: (text) => dispatch(addTaskActionCreator(text))
})

export default connect(null, mapDispatchToProps)(TaskInput)