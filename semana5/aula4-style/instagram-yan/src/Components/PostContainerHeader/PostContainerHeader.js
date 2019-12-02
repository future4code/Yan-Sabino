import React from 'react';
import './PostContainerHeader.css';

class PostContainerHeader extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="PostContainerHeader">
                <img id="imgRedonda" src={this.props.imagem}></img>
				<p id="userInsta">{this.props.nome}</p>
            </div>
            )
	}

}
export default PostContainerHeader;