import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import { getTrips } from '../../actions/tripActions'

class TripList extends React.Component {
      

      componentDidMount(){
        this.props.fetchTrips()
      }
      
      render(){
        console.log(this.props)
        return (
            <div>
               <h1>EU SOU A TripsList</h1>
        {this.props.trips.map((trip)  =>(<li>{trip.planet}</li>))}
            <Button onClick={this.props.goToCreateTrip}>Va Para Create Trip</Button> 
            <Button onClick={this.props.goToTripDetails}>Trip Details</Button> 
            </div>
            
        );
        }
};

const mapStateToProps = state => ({
  trips: state.trips.allTrips
  
}

);



function mapDispatchToProps(dispatch) {
    return {
      goToTripDetails: () => dispatch(push(routes.tripDetails)),
      goToCreateTrip: () => dispatch(push(routes.createTrip)),
      fetchTrips: () => dispatch(getTrips())
    }
      
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList) 
