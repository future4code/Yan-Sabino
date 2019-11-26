import React from 'react';
import './CvFlexItem.css';

function CvFlexItem(props){
    return(
        <div className="CvFlexItem">
            <h3>{props.titulo}</h3>
        </div>
    )
}

export default CvFlexItem;