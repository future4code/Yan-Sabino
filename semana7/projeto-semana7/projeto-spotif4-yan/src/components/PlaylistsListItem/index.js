import React from 'react'
import axios from 'axios'

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

const PlayListsListItem = props =>{

    const handleOnClickDelete = async () =>{
        const url= `${baseURL}/playlists/deletePlaylist?playlistId=${props.playlist.id}`
        const axiosConfig = {
            headers:{
                auth: "yan"
            }
        }

        try{
            await axios.delete(url,axiosConfig)
            props.handleGetAllPlaylists()
        }catch(error){
            console.log(error.message)
        }
    }



    return(
        <div>
        <li>
            {props.playlist.name}{" "}
            <button onClick={handleOnClickDelete}>X</button>
        </li>
        </div>
        
    )
}
export default PlayListsListItem