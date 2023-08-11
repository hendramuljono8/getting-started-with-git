import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./NotFound"; // Make sure to import the NotFound component

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/users/:userId" component={User} />
        <Route component={NotFound} /> {/* This will render when no other route matches */}
      </Switch>
    </Fragment>
  );
}

export default App;
