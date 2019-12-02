import React from "react"   
import styled from 'styled-components'

const ContainerEtapa4 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width:400px;
`
class Etapa4 extends React.Component{
  render(){
    return(
      <ContainerEtapa4>
        <h2>O Formulário Acabou</h2>
        <p>Muito Obrigado por Participar! Entraremos em Contato!</p>
      </ContainerEtapa4>
    )
  }
}

export default Etapa4