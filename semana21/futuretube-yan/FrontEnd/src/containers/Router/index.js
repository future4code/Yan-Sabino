import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp"

export const routes = {
  login: "/login",
  signup: "/signup",
  // home: "/videos/"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        {/* <Route exact path={routes.home} component={Home} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
