import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const tripForm = [
    {
        name: 'Nome da viagem',
        type: 'text',
        label: 'Nome da viagem',
        required: true,
        pattern: "[A-Za-z]{5,}"
    },

    {
        name: 'Nome da viagem',
        type: 'text',
        label: 'Nome da viagem',
        required: true,
        pattern: "[A-Za-z]{5,}"
    }
]

class CreateTrip extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }
        render(){
            return (
                <div>
                   <h1>EU SOU A CreateTrip</h1>
                <Button onClick={this.props.goToTripsList}>Trip List</Button> 
                 
                </div>
                
            );
        }
        
    
};

function mapDispatchToProps(dispatch) {
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),
    }
      
    
}

export default connect(null, mapDispatchToProps)(CreateTrip) 