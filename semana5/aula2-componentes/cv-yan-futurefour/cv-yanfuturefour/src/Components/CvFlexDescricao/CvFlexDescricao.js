import React from 'react';
import './CvFlexDescricao.css';

function CvFlexDescricao(props){
    return(
        <div className="CvFlexDescricao">
            <h4>{props.nome}</h4>
            <div className="MiniContainer">
            <img id="imgRedonda" src={props.imagem}></img>
            <p>{props.texto}</p>
            </div>
        </div>
    )
}
export default CvFlexDescricao;