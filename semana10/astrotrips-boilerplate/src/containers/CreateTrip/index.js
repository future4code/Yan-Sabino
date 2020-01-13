import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const CreateTrip = props => {
    
    
        console.log(props)
        return (
            <div>
               <h1>EU SOU A CreateTrip</h1>
            <Button onClick={props.goToTripsList}>Trip List</Button> 
             
            </div>
            
        );
    
};

function mapDispatchToProps(dispatch) {
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),
    }
      
    
}

export default connect(null, mapDispatchToProps)(CreateTrip) 