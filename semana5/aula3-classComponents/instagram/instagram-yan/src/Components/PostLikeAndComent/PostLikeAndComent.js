import React from 'react'
import './PostLikeAndComent.css'

function ContainerParaMostrar(mostra) {
    if (mostra) {
      return <div id="PostCommentContainer">
      <input placeholder="Escreva Seu Comentário"></input>
      {/* <button onClick={this.addComment}>Comentar</button> */}
     </div>;
    }
  }

class PostLikeAndComent extends React.Component{
	constructor(props){
        super(props);
        this.state={
            mostrandoOContainer: false,
            quantidadeComment: 0,
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
        // console.log("oi")
        if(this.state.mostrandoOContainer){
            this.setState({
                mostrandoOContainer: false
            })
        }else{
            this.setState({
                mostrandoOContainer: true
            })
        }
    }

    addComment = () =>{
        const numeroDeComentarios = this.state.quantidadeComment
        this.setState({
            quantidadeComment: numeroDeComentarios + 1
        })
        
    }

	render(){
		return(
            <div>
			<div className="PostLikeAndComentContainer">
                
                <div id="container1">
                   <img alt="img" src={this.state.urlDoIcone} onClick={this.aoClicarNoIcone}/>
                   <p>{this.state.quantidadeLike}</p> 
                </div>
				<div id="container2">
                    <img src={this.state.urlDoComent} onClick={this.aoClicarNoComment}/>
                    <p>{this.state.quantidadeComment}</p>
                    
                </div>
			</div>
            <div id="ContainerComments">
                {ContainerParaMostrar(this.state.mostrandoOContainer)}
                <button  onClick={this.addComment}>Comentar</button>
            </div>
            </div>
        )
	}

}

export default PostLikeAndComent