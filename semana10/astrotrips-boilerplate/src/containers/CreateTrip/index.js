import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import MenuItem from '@material-ui/core/MenuItem'

const tripForm = [
    {
        name: 'Nome da viagem',
        type: 'text',
        label: 'Nome da viagem',
        required: true,
        pattern: "[A-Za-z]{5,}"
    },

    {
        name: 'Data',
        type: 'text',
        label: 'Data',
        required: true,
        pattern: ""
    },

    {
        name: 'Descrição',
        type: 'text',
        label: 'Descrição',
        required: true,
        pattern: "[A-Za-z]{30,}"
    },

    {
        name: 'Duração',
        type: 'text',
        label: 'Duração',
        required: true,
        pattern: ""
    }
]



const TripsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class CreateTrip extends React.Component {

    constructor(props){
        super(props)
        this.state={
            form: {},
        }
    }
        render(){
            return (
                <div>
                   
                <TripsWrapper>
                <h1>EU SOU A CreateTrip</h1>
                <TextField select>
                    <MenuItem>Mercúrio</MenuItem>
                    <MenuItem>Vênus</MenuItem>
                    <MenuItem>Terra</MenuItem>
                    <MenuItem>Marte</MenuItem>
                    <MenuItem>Saturno</MenuItem>
                    <MenuItem>Júpter</MenuItem>
                    <MenuItem>Urano</MenuItem>
                    <MenuItem>Netuno</MenuItem>
                </TextField>
                <Button onClick={this.props.goToTripsList}>Trip List</Button> 
                </TripsWrapper>
                
                 
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