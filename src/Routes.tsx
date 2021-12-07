import React from "react";
import { Route, Switch } from "react-router-dom";

function Home() {
    return null;
}

function FAQ() {
    return null;
}

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/faq">
      <FAQ />
    </Route>
  </Switch>
);
