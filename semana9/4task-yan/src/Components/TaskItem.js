import React from 'react';

export default class TaskItem extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><input type="checkbox"/>Usar Redux  <button>X</button></li>
                    <li><input type="checkbox"/>Usar React  <button>X</button></li>
                    <li><input type="checkbox"/>Usar JavaScript  <button>X</button></li>
                </ul>
                
            </div>
        )
    }
}