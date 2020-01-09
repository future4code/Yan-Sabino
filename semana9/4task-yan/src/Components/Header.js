import React from 'react';

import TaskInput from './TaskInput'

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>4Tasks</h1>
                <TaskInput></TaskInput>
            </div>
            
        )
    }
}