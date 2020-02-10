import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class AddMusicToPlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            music: "",
            artist: "",
            musicUrl: ""
        }
    }

    componentDidMount(){
        this.handleAddMusicToPlaylist()
    }

    handleAddMusicToPlaylist = async () =>{
        const urlAdd = `${baseURL}/playlists/addMusicToPlaylist`
        const data = {
            playlistId: "",
            music:{
                name: this.state.music,
                artist: this.state.artist,
                url: this.state.musicUrl
            }
           
        }

        const axiosConfig = {
            headers:{
                auth: "yan"
            }
            
        }

        await axios.put(urlAdd,data,axiosConfig)
        this.setState({
            music: "",
            artist: "",
            musicUrl: ""
        })

    }

    handleInputAddMusicChange = e =>{
        this.setState({music: e.target.value})
    }
    handleInputAddArtistChange = e =>{
        this.setState({music: e.target.value})
    }
    handleInputAddMusicUrlChange = e =>{
        this.setState({music: e.target.value})
    }

    render(){
        return(
            <div>
                <input 
                value={this.state.music}
                onChange={this.handleInputAddMusicChange}
                placeholder="Música"
                />
                <input 
                value={this.state.artist}
                onChange={this.handleInputAddArtistChange}
                placeholder="Artista"
                />
                <input 
                value={this.state.musicUrl}
                onChange={this.handleInputAddMusicUrlChange}
                placeholder="URL"
                />
                <button onClick={this.handleAddMusicToPlaylist}>Adicionar Músicas</button>
            </div>
            
        )
    }

}

export default AddMusicToPlaylist