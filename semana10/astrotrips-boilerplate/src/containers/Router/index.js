import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage/HomePage'
import AppForm from '../AppForm/AppForm'
import CreateTrip from '../CreateTrip/index'
import TripsList from '../TripsList/index'
import TripDetails from '../TripDetails/index'


export const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  tripsList: "/trips/list",
  tripDetails: "/trips/details",
  candidatesList: ""
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.applicationForm} component={AppForm} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.createTrip} component={CreateTrip} />
        <Route exact path={routes.tripsList} component={TripsList} />
        <Route exact path={routes.tripDetails} component={TripDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
