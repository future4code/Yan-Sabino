import React from 'react';
import './App.css';
import Etapa1 from './Components/Etapa1/Etapa1'
import Etapa2 from './Components/Etapa2/Etapa2'
import Etapa3 from './Components/Etapa3/Etapa3'
import Etapa4 from './Components/Etapa4/Etapa4'


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      etapa: 1
    }
  }

  selecionaPagina = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1></Etapa1>
      case 2:
        return <Etapa2></Etapa2>
      case 3:
        return <Etapa3></Etapa3>
      case 4:
        return <Etapa4></Etapa4>
      default:
        return <Etapa1></Etapa1>
    }
  }


  aoClicarNoBotao = () =>{
    this.setState({etapa: this.state.etapa + 1})
  }
  render(){
    return (
      <div className="App">
        {this.selecionaPagina()}
        {this.state.etapa < 4 &&(
          <button onClick={this.aoClicarNoBotao}>Próxima Etapa</button>
        )}
        
      </div>
        )
  }

  
}

export default App;
