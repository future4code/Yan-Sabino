import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../LoginPage";
import SignUp from "../SignUp"
import Home from "../Home"
import ChangePassword from "../ChangePassword"

export const routes = {
  login: "/login",
  signup: "/signup",
  home: "/",
  changePassword: "/changePassword"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
