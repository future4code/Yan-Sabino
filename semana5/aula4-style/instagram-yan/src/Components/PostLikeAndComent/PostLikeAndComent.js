import React from 'react'
import './PostLikeAndComent.css'



class PostLikeAndComent extends React.Component{
	constructor(props){
        super(props);
        this.state={
            mostrandoOContainer: false,
            quantidadeComment: 0,
            quantidadeLike: 0,
            urlDoIcone: "https://cdn.icon-icons.com/icons2/38/PNG/512/like_favorite_heart_5759.png",
            urlDoComent: "https://cdn.icon-icons.com/icons2/1863/PNG/512/add-comment_119466.png"
        };
	}

    aoClicarNoIcone = () =>{
        const numeroDeLikes = this.state.quantidadeLike
        if(this.state.urlDoIcone === "https://cdn.icon-icons.com/icons2/38/PNG/512/like_favorite_heart_5759.png"){
        this.setState({
            quantidadeLike: numeroDeLikes + 1,
            urlDoIcone: "https://cdn.icon-icons.com/icons2/510/PNG/512/heart_icon-icons.com_50374.png"
        });
    }else{
        this.setState({
            urlDoIcone:"https://cdn.icon-icons.com/icons2/38/PNG/512/like_favorite_heart_5759.png",
            quantidadeLike: 0
        })
    }
    }

    containerParaMostrar = (mostra) => {
        if (mostra) {
          return <div id="PostCommentContainer">
          <input placeholder="Escreva Seu Comentário"></input>
          <button onClick={this.addComment}>Comentar</button>
         </div>;
        }
      }

    aoClicarNoComment = () => {
        
        if(this.state.mostrandoOContainer){
            this.setState({
                mostrandoOContainer: false
            })
        }   else{
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
                {this.containerParaMostrar(this.state.mostrandoOContainer)}
            </div>
            </div>
        )
	}

}

export default PostLikeAndComent