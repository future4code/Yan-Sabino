import React from 'react'
import './PostContainer.css'

class PostContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="PostContainer">
				{this.props.children}
				
			</div>
        )
	}

}
export default PostContainer