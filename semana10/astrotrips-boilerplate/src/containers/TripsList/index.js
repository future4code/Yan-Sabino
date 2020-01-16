import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import { getTrips } from '../../actions/tripActions'
import LoginPage from '../LoginPage/index'

class TripList extends React.Component {

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      this.props.fetchTrips()
    }
    
  }

  render() {
    console.log(this.props.trips)
    return (
      <div>
        <h1>EU SOU A TripsList</h1>
        {this.props.trips.map((trip) => (<li>{trip.planet}</li>))}
        <Button onClick={this.props.goToCreateTrip}>Va Para Create Trip</Button>
        <Button onClick={this.props.goToTripDetails}>Trip Details</Button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  trips: state.trips.allTrips
});

function mapDispatchToProps(dispatch) {
  return {
    goToTripDetails: () => dispatch(push(routes.tripDetails)),
    goToCreateTrip: () => dispatch(push(routes.createTrip)),
    fetchTrips: () => dispatch(getTrips()),
    goToLoginPage: () => dispatch(push(routes.login))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList) 
