import React, { createContext, useContext } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./pages/login";
import { ProvideAuth } from "./hooks/auth"
import PrivateRoute from "./components/PrivateRoute"
import Car from "./pages/car";
import Quote from "./pages/quote";
import { ProvideCalculate } from "./hooks/calculate";
require('dotenv').config()

const customHistory = createBrowserHistory();

function App() {
  return (
    <ProvideAuth>
      <ProvideCalculate>
      <Router history={customHistory}>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/car">
              <Car></Car>
            </PrivateRoute>
            <PrivateRoute path="/quote">
              <Quote></Quote>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
      </ProvideCalculate>
    </ProvideAuth>
  );
}

export default App;
