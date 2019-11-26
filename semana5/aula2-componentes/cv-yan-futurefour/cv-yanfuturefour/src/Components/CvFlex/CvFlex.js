import React from 'react';
import './CvFlex.css';

function CvFlex(props){
    return(
        <div className="CvFlexContainer">
            {props.children}
        </div>
    )
}

export default CvFlex;

