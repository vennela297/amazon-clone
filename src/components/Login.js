import React, { useState } from "react";
import "./CSS/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  //usehistory allows us to change the url programatically
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();

    //firebase register stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //it sucessfully created an user with the submitted email and password
        console.log(auth);
        //if the authentication is sucessfull then it redirects to the home page
        if (auth) {
          //we r forcefully telling the brower history to rediect to the specified url
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="input"
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signin}
          >
            Sign-in
          </button>
        </form>

        <p>
          By signing in you agree to the amazons conditions of use and sale.
          please see our privacy notice our Cokkies notice and our Interest
          based ads.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
