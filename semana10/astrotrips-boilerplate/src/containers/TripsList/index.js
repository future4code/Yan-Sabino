import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const TripList = props => {
    
    
        console.log(props)
        return (
            <div>
               <h1>EU SOU A TripsList</h1>
            <Button onClick={props.goToCreateTrip}>Va Para Create Trip</Button> 
            <Button onClick={props.goToTripDetails}>Trip Details</Button> 
            </div>
            
        );
    
};

function mapDispatchToProps(dispatch) {
    return {
      goToTripDetails: () => dispatch(push(routes.tripDetails)),
      goToCreateTrip: () => dispatch(push(routes.createTrip))
    }
      
    
}

export default connect(null, mapDispatchToProps)(TripList) 
