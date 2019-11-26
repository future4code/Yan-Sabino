import React from 'react';
import './CvInfos.css';

function CvInfos(props){
    return(
        <div className="CvFlexInfos">
            <div className="MiniContainer">
            <img id="icone" src={props.imagem}></img>
            <label id="labelInfos"><b>{props.label}</b></label>
            <p id="pInfo">{props.texto}</p>
            </div>
        </div>
    )
}
export default CvInfos;