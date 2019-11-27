import React from 'react';
import './CvButtom.css';

function CvButtom(props){
    return(
        <div className="CvButtom">
            <button><div id="botao">
                <img id="seta" src={props.imagem}></img>
                <p id="textoBotao">{props.texto}</p>
                </div></button>
        </div>
    )
}
export default CvButtom;