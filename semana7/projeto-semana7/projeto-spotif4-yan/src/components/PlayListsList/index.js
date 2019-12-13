import React from "react";
import axios from "axios";
import PlayListsListItem from '../PlaylistsListItem/index'
import AddMusicToPlaylist from '../AddMusicToPlaylist/index'

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class PlayListsList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            playlists: [],
            
        }
    }


   componentDidMount() {
       this.handleGetAllPlaylists()
   }

   handleGetAllPlaylists = async () =>{
    const url = `${baseURL}/playlists/getAllPlaylists`    
    const axiosConfig = {
            headers:{
                auth: "yan"
            }
        }

        const response = await axios.get(url,axiosConfig)

        this.setState({playlists: response.data.result.list})
   }

    render(){
        return (
            <div>
                <h3>Playlists Criadas</h3>
                
                {this.state.playlists.map(playlist =>(
                    <PlayListsListItem playlist={playlist} onDeletePlaylist={this.handleGetAllPlaylists}/>
                    
                ))}
                
                <AddMusicToPlaylist/>
            </div>
        )

    }

}

export default PlayListsList