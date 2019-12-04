import React from 'react'
import styled from "styled-components";

const FormContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const StyledInput = styled.input`
  margin-bottom: 5px;
`;

export default class TaskForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            valorInputLista: "",
            valorSelect: "Nenhum"
        }
    }

    onChangeTarefa = e =>{
        this.setState({valorInputLista: e.target.value})
    }

    aoClicarAdicionar = () => {
        this.props.adicionaList(this.state.valorInputLista)

        this.setState({
            valorInputLista: ""
        })
    }

    render(){
        return(
            <FormContainer>
                <h2>Lista de Tarefas</h2>
                <StyledInput
                type="text"
                placeholder="Escreva sua Tarefa"
                value={this.state.valorInputLista}
                onChange={this.onChangeTarefa}
                />
                <button onClick={this.aoClicarAdicionar}>Adicionar</button>
                <label> Filtro
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Nenhum">Nenhum</option>
                </select>
                </label>  
            </FormContainer>
        )
    }
}