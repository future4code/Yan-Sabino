import React from 'react'
import './PostLikeAndComent.css'


class PostLikeAndComent extends React.Component{
	constructor(props){
        super(props);
        this.state={
            quantidadeLike: 0,
            urlDoIcone: "https://encurtador.com.br/gGILT",
            urlDoComent: "https://encurtador.com.br/tIJV4"
        };
	}

    aoClicarNoIcone = () =>{
        const numeroDeLikes = this.state.quantidadeLike
        if(this.state.urlDoIcone === "https://encurtador.com.br/gGILT"){
        this.setState({
            quantidadeLike: numeroDeLikes + 1,
            urlDoIcone: "https://encurtador.com.br/dCQY4"
        });
    }else{
        this.setState({
            urlDoIcone:"https://encurtador.com.br/gGILT",
            quantidadeLike: 0
        })
    }
    }

    aoClicarNoComment = () => {
        
    }

	render(){
		return(
			<div className="PostLikeAndComentContainer">
                <div id="container1">
                   <img alt="img" src={this.state.urlDoIcone} onClick={this.aoClicarNoIcone}/>
                   <p>{this.state.quantidadeLike}</p> 
                </div>
				<div id="container2">
                    <img src={this.state.urlDoComent}/>
                </div>
			</div>
        )
	}

}
export default PostLikeAndComent