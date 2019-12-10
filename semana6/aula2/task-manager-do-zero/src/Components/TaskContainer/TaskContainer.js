import React from "react";
import styled from "styled-components";
import TaskForm from '../TaskForm/TaskForm'
import TaskFormSelect from '../TaskForm/TaskFormSelect'
import TaskList from '../TaskList/TaskList'
import TaskListRiscada from '../TaskList/TaskListRiscada'

const MainContainer = styled.div`
  padding: 5px;
  width: 400px;
  margin: 0 auto;
`;

const listaDeAtividades = []


export default class TaskContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listaDeAtividades: listaDeAtividades
        }
    }

    adicionaList = (tarefa) =>{
        const novaTarefaAdd = {
            nomeTarefa: tarefa
        }

        const copiaTarefa = [...this.state.listaDeAtividades]

        copiaTarefa.push(novaTarefaAdd)

        this.setState({nomeTarefa: copiaTarefa})
    }


    mostraLista = () =>{
        return this.state.listaDeAtividades.map(tarefaAdd => {
            console.log("tarefa:", tarefaAdd)
        return<li>{tarefaAdd}</li>
        })
    }

    render(){
        const listaDeAtividadesAdd = this.mostraLista()



        return(
            <MainContainer>
                <TaskForm adicionaList={this.adicionaList}/>
             <ul>{listaDeAtividadesAdd}</ul>
            </MainContainer>
        )
    }
}