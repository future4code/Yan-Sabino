import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class AddMusicToPlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            music: ""
        }
    }

    

    handleAddMusicToPlaylist = e =>{
        this.setState({music: e.target.value})
    }

    render(){
        return(
            <div>
                <input 
                value={this.state.music}
                onChange={this.handleAddMusicToPlaylist}
                />
                <button>Adicionar Músicas</button>
            </div>
            
        )
    }

}

export default AddMusicToPlaylist