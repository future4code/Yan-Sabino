import React from 'react';
import axios from "axios";
import styled from "styled-components"

const token = "yan"
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

 class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        allUsers: [],
        userName: "",
        userEmail: "",
        mostraContatos: false
      }
    }

    getAllUsers = () => {
      const url = `${baseUrl}/users/getAllUsers`
      

      const request = axios.get(url, {
        headers: {
          "api-token": token
        }
      })

      request.then(response => {
        
        console.log(response.data)
        const allUsers = response.data.result.list
        this.setState({ allUsers: allUsers });
      })

    }

    createUsers = () =>{
      const url= `${baseUrl}/users/createUser`

      const data = {
        name: this.state.userName,
        email: this.state.userEmail
      }

      const request = axios.post(url,data,{
        headers:{
          "api-token": token
        }
      })

      request
        .then(response =>{
          this.getAllUsers();
          this.setState({
            userName: "",
            userEmail: ""})
        })
        .catch(error =>{
          alert(error.message)
        });
        
    }

    componentDidMount(){
        this.getAllUsers()
    }

    onNewUserNameChange = event =>{
      this.setState({userName: event.target.value})
    }

    onNewUserEmailChange = event =>{
      this.setState({userEmail: event.target.value})
    }

    onIrPraListaClick = () =>{
        this.setState({mostraContatos: !this.state.mostraContatos})
    }

    render(){
      const allUsersList = this.state.allUsers.map(eachUser => {
        return <li>{eachUser.name}</li>
      })
      return (
        
          <div>
          
          <button onClick={this.onIrPraListaClick}>Ir para página de lista</button>
          {this.state.mostraContatos && (
            <div>
            <h2>Usuários Cadastrados:</h2>
            <ul>{allUsersList}</ul>
            </div>
          )}
          
          
          
              <label>Nome:
                <input 
                type="text"
                onChange={this.onNewUserNameChange}
                value={this.state.userName}
                />
              </label>

              <label>E-mail:
                <input
                type="text"
                onChange={this.onNewUserEmailChange}
                value={this.state.userEmail}
                />
              </label>
              <button onClick={this.createUsers}>Salvar</button>
          </div>
        
      )

    }
  
}

export default App;

