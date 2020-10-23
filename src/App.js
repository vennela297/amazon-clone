import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

import "./App.css";

function App() {
  
  const [{}, dispatch] = useStateValue();

  //we have set the useeffect in order to keep tract of the user sign in and sign out , basically whn the
  //app runs for the first time it attaches a powrfull event listener from the firebase

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is  >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>

          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
