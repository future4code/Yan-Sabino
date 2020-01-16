import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

class TripDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        }
        
    }

    render(){
        return (
            <div>
                <h1>Eu sou a Trip Details</h1>
                <Button onClick={this.props.goToTripsList}>va para a trip list </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),
        goToLoginPage: () => dispatch(push(routes.login))
    }
}

export default connect(null, mapDispatchToProps)(TripDetails)