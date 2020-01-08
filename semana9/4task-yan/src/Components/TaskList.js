import React from 'react';
import TaskItem from './TaskItem'
import { connect } from 'react-redux';

 class TaskList extends React.Component{
    render(){
        return(
            <ul>
                <TaskItem/>
            </ul>
        )
    }
}
export default connect()(TaskList)