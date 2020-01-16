import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import MenuItem from '@material-ui/core/MenuItem'
import { createTrip } from '../../actions/tripActions'

const tripForm = [
    {
        name: 'name',
        type: 'text',
        label: 'Nome da viagem',
        required: true,
        pattern: "[A-Za-z]{5,}"
    },

    {
        name: 'date',
        type: 'text',
        label: 'Data',
        required: true,
        pattern: "^(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}$",

    },

    {
        name: 'description',
        type: 'text',
        label: 'Descrição',
        required: true,
        pattern: "[A-Za-z]{30,}"
    },

    {
        name: 'durationInDays',
        type: 'text',
        label: 'Duração',
        required: true,
        pattern: "^[0-9]*$"
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

const StyledDropDown = styled(TextField)`
width: 185px;
`

class CreateTrip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {},
            value: "",
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        }
        
    }

    onHandleChangePlanet = (event) => {
        
        this.setState({ value: event.target.value })
        console.log(this.state.value)
    }

    handleCreateTrip = () => {
        const { name, date, description, durationInDays } = this.state.form
        const planet = this.state.value
        this.props.createTrip(name, date, description, durationInDays, planet)
    }

    handleFieldChange = event => {
        const { name, value } = event.target
        
        this.setState({
          form: { ...this.state.form, [name]: value }
        });
    };

    render() {
        return (
            <TripsWrapper>
                <h1>Crie uma Viagem</h1>
                {tripForm.map(input => (
                    <TextField
                        onChange={this.handleFieldChange}
                        value={this.state.form[input.name] || ""}
                        name={input.name}
                        type={input.type}
                        label={input.label}
                        required={input.required}
                        pattern={input.pattern}
                    />
                ))}
                <StyledDropDown
                    select
                    onChange={this.onHandleChangePlanet}
                    label="Planeta"
                    name="planet"
                    value={this.state.value}>
                    <MenuItem value="mercurio">Mercúrio</MenuItem>
                    <MenuItem value="venus">Vênus</MenuItem>
                    <MenuItem value="terra">Terra</MenuItem>
                    <MenuItem value="marte">Marte</MenuItem>
                    <MenuItem value="saturno">Saturno</MenuItem>
                    <MenuItem value="jupter">Júpiter</MenuItem>
                    <MenuItem value="urano">Urano</MenuItem>
                    <MenuItem value="netuno">Netuno</MenuItem>
                </StyledDropDown>
                <Button onClick={this.handleCreateTrip}>Trip List</Button>
            </TripsWrapper>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),
        goToLoginPage: () => dispatch(push(routes.login)),
        createTrip: (name, date, description, durationInDays, planet) => dispatch(createTrip(name, date, description, durationInDays, planet))
    }
}

export default connect(null, mapDispatchToProps)(CreateTrip) 