import React from 'react'
import axios from 'axios'

const token = "yan"
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class UserListItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    handleOnClickX = () =>{

        const url = `${baseUrl}/users/deleteUser?id=${this.props.user.id}`

        const axiosConfig = {
            headers: {
                "api-token": token
            }
        }
        axios.delete(url,axiosConfig).then(() =>{
            this.props.onDeleteUser()
            
        })

        if(window.confirm("Tem Certeza que quer deletar? ")){
            return true
        }else{
            return false
        }
        
    }
    render(){
        return(
            <li>
               {this.props.user.name} <button onClick={this.handleOnClickX}>X</button>
            </li>
             
        )
    }
}

export default UserListItem