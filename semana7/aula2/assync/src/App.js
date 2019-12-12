import React from 'react';

import styled from "styled-components"
import UserSignup from './Components/UserSignUp/index'
import UsersList from './Components/UsersList/index'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 400px;
`

class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        currentPage: "signup"
      }
    }

    handleChangePage = () =>{
      if(this.state.currentPage === 'signup'){
        this.setState({ currentPage: 'list'})
      } else{
        this.setState({currentPage: 'signup'})
      }
    }

    render(){
      const buttonText = 
      this.state.currentPage === 'signup'
      ? "Ir para Lista"
      : "Ir para Cadastro"

      return <div>
        <button onClick={this.handleChangePage}>{buttonText}
        </button>
        {this.state.currentPage === "signup" ? (
        <UserSignup/>
        ):
        <UsersList/>
      }
        
      </div>
    }
    
  
}

export default App;

