import React from 'react';
import { connect } from 'react-redux';
import { deleteEachTaskActionCreator } from '../Actions/index'


class TaskItem extends React.Component{
    render(){
        return(
            
                <li><input type="checkbox"/>{this.props.task.text} <button >X</button></li>
                // onClick={() => this.props.deleteEachTaskActionCreator(id)}
        )
    }
}

// const mapDispatchToProps = (dispatch) =>({
//     deleteTask: (id) => dispatch(deleteEachTaskActionCreator(id))
// })

export default connect()(TaskItem)

// null, mapDispatchToProps