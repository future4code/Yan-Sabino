import React from "react"   
import styled from 'styled-components'

const ContainerEtapa3 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width:400px;
`

class Etapa3 extends React.Component{
    
    render(){
        return(
            <ContainerEtapa3>
                <h2>Etapa 3 - Informações Gerais de Ensino</h2>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>8. Voce fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
                
            </ContainerEtapa3>
        )
    }
}

export default Etapa3