import React from 'react';
import axios from "axios";

const token = "yan"
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

 class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        allUsers: []
      }
    }

    getAllUsers = () => {
      const url = `${baseUrl}/users/getAllUsers`
      

      const request = axios.get(url, {
        headers: {
          "api-token": token,
        }
      })

      request.then((response)=>{
        
        console.log(response.data)
        const allUsers = response.data.result.list
        this.setState({ allUsers: allUsers });
      })

    }

    componentDidMount(){
        this.getAllUsers()
    }


    render(){
      return (
        <div>
          
        </div>
      );

    }
  
}

export default App;
