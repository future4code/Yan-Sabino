import React from 'react';
import TaskItem from './TaskItem'
import { connect } from 'react-redux';

 class TaskList extends React.Component{
    render(){
        return this.props.allTasks.map(task => (<TaskItem task = {task}/>))
    }
}

const mapStateToProps = (state) =>({
    allTasks: state.tasks.allTasks
})
export default connect(mapStateToProps)(TaskList)