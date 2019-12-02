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
    constructor(props){
        super(props)
        this.state = {
            selectOption: "Ensino Médio Incompleto"
        }
    }

    //Inicio da Primeira parte do desafio
// alterarSelect = e =>{
//     this.setState({
//         selectOption: e.target.value
//     })
// }

// selecionarPaginaSelect = () => {
//     if(this.state.selectOption.value === "Ensino Médio Completo" || this.state.selectOption.value === "Ensino Superior Completo"){
//        return <Etapa2/> 
//     } else{
//         return <Etapa3/>
//     }
// }

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
            <select value={this.state.selectOption} onChange={this.alterarSelect}>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Superior Completo</option>
            </select>
            
            </ContainerEtapa1>
        )
    }
}

export default Etapa1