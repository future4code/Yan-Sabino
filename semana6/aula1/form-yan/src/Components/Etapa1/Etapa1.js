import React from "react"   
import styled from 'styled-components'

const ContainerEtapa1 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width:400px;
`

class Etapa1 extends React.Component{
    
    render(){
        return(
            <ContainerEtapa1>
            <h2>Etapa 1 - Dados Gerais</h2>
            <p>1. Qual o seu nome?</p>
            <input></input>
            <p>2. Qual sua Idade?</p>
            <input></input>
            <p>3. Qual seu email?</p>
            <input></input>
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            
            </ContainerEtapa1>
        )
    }
}

export default Etapa1