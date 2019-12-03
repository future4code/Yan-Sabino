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
`


class App extends React.Component{
  constructor(){
    super()
    
    this.state = {

    }
  }



  
  render() {
    return (
      <MainContainer>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </MainContainer>
        
      
    );
  }
}


export default App;
