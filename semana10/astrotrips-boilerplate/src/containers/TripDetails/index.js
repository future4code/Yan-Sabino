import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const TripDetails = props => {
    return(
        <div>
            <h1>Eu sou a Trip Details</h1>
            <Button onClick={props.goToTripsList}>va para a trip list </Button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),

    }
}

export default connect(null, mapDispatchToProps)(TripDetails)