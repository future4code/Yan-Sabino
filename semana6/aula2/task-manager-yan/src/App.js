import React from 'react';
import AddTarefas from './Components/AddTarefas/AddTarefas';
import FiltrarTarefas from './Components/FiltrarTarefas/FiltrarTarefas'
import ListaTarefas from './Components/ListaTarefas/ListaTarefas'
import './App.css';
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
width: 50%;
margin: 50px auto;
padding: 20px 0 50px;
`


class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      listaDeTarefas: []
    }
  }

onClickBotao = (novaTarefaTexto) =>{
  const novaListaDeTarefas = [...this.state.listaDeTarefas]
  novaListaDeTarefas.push(novaTarefaTexto)
  this.setState({listaDeTarefas: novaListaDeTarefas})
}

addNaTelaALista = ()=>{
  return this.state.listaDeTarefas.map(item => {
      console.log("ITEM", item)
  return <li>{item}</li>
  })
}


  render() {
    const listaDeTarefasAdd = this.addNaTelaALista()

    return (
      <MainContainer>
        <h1>Lista de Tarefas</h1>
          <AddTarefas 
          aoClicarEmAdicionar={this.onClickBotao}
          arrayDeLista={this.listaDeTarefas}
          />
          
          <FiltrarTarefas/>
          <ul>{listaDeTarefasAdd}</ul>
      </MainContainer>
        
      
    );
  }
}


export default App;
