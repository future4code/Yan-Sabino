import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class PlayListsList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            list: []
        }
    }


   componentDidMount() {
       this.handleGetAllPlaylists()
   }

   handleGetAllPlaylists = async () =>{
    const url =     
    const axiosConfig = {
            headers:{
                auth: "yan"
            }
        }

        const response = await axios.get()
   }

    render(){
        return (
            <div>oi</div>
        )

    }

}

export default PlayListsList