import React from 'react';
import './CvFlexTitulo.css';

function CvFlexTitulo(props){
    return(
        <div className="CvFlexTitulo">
            <h3>{props.titulo}</h3>
        </div>
    )
}
export default CvFlexTitulo;