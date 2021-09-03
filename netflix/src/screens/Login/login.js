
import React, { useRef, useState,useContext } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/authContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {dispatch} = useContext(AuthContext);
  console.log(password);

  async function handleForm(e) {
     e.preventDefault();
     login({email, password},dispatch)
     
  }
  return (
    <div className="register">
      <div className="login_container">
        <h3>Ready to see some football action on Zetflix lets do it</h3>
        <form>
          <input className="email_input" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input
            className="email_input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_button" onClick = {handleForm}>Login in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
