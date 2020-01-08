import React from 'react';

export default class TaskItem extends React.Component{
    render(){
        return(
            
                <li><input type="checkbox"/>{this.props.task.text} <button>X</button></li>
            
        )
    }
}