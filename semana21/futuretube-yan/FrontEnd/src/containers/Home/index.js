import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/header"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: ""
        }

    }

    render(){
        return(
            <Fragment>
                <Header/>
            </Fragment>
        )
    }
}

export default connect()(Home)