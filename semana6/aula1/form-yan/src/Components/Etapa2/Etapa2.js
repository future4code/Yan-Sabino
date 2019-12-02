import React from "react"   
import styled from 'styled-components'

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width:400px;
`

class Etapa2 extends React.Component{
    
    render(){
        return(
            <ContainerEtapa2>
            <h2>Etapa 2 - Informações do Ensino Superior</h2>
            <p>5. Qual Curso?</p>
            <input></input>
            <p>6. Qual Unidade de Ensino?</p>
            <input></input>
            
            </ContainerEtapa2>
        )
    }
}

export default Etapa2