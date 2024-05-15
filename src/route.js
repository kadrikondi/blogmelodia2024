import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./component/pages/Home";
import Users from "./component/pages/Users";
import UserProfile from "./component/pages/UserProfile";

export default function OurRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/users">
          <Users />
        </Route>

        <Route exact path="/userprofile/:id">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}
