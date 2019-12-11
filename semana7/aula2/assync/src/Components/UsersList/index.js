import React from 'react'

import UserListItem from '../UserListItem/index'
import axios from "axios";

const token = "yan"
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class UsersList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            allUsers: []
        }
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () =>{
        const axiosConfig = {
            headers: {
                "api-token": token
            }
        }

       const getAllUsersRequest = axios.get(`${baseUrl}/users/getAllUsers`, axiosConfig)

       getAllUsersRequest.then((response) => {
           this.setState({allUsers: response.data.result})
       })
    }

    render(){
        return(
            <div>
                <h3>Usuários Cadastrados</h3>
                {this.state.allUsers.map(user =>(
                    <UserListItem user={user} onDeleteUser={this.getAllUsers}/>
                    
                ))}
            </div>
        )
    }
}

export default UsersList