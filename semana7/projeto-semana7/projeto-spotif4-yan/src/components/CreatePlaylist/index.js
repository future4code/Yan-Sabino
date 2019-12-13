import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class CreatePlaylist extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playlistName: ''
        }
    }

    handleCreatePlaylist = async () =>{
        const url = `${baseURL}/playlists/createPlaylist`
        const data = {
            name: this.state.playlistName 
        }

        const axiosConfig = {
            headers:{
                auth: "yan"
            }
        }

        await axios.post(url,data,axiosConfig)
        this.setState({playlistName: ""})

        

    }

    onChangePlaylistValue = e =>{
        this.setState({playlistName: e.target.value})
    }

    render(){
        return(
            <div>
            <label>
                Criar Playlist:
                <input
                 value={this.state.playlistName}
                 onChange={this.onChangePlaylistValue}
                 />
                
            </label>
            <button onClick={this.handleCreatePlaylist}>Criar Playlist</button>
            </div>
            
        )
    }
}

export default CreatePlaylist