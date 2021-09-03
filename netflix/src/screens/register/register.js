import React, { useRef, useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailref = useRef();
  const passwordref = useRef();
  const history = useHistory();
console.log(email)
  function handleClick() {
    setEmail(emailref.current.value);
    
  }

  async function handleForm(e) {
   e.preventDefault(); 
    setPassword(passwordref.current.value);
    try {
      await axios.post(
        "https://Zetflix-football-app.shaileshweb.repl.co/api/register",
        { email, password }
      );
      history.push("/login");
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="register">
      <div className="email_container">
        <h3>Ready to see some football action on Zetflix lets do it</h3>
        {!email ? (
          <div>
            <input
              className="email_input"
              placeholder="what's your email"
              ref={emailref}
            />
            <button onClick={handleClick}>Register</button>
          </div>
        ) : (
          <form>
          <div>
            <input
              className="email_input"
              placeholder="what's your password"
              ref={passwordref}
            />
            <button onClick={handleForm}>Start</button>
            </div>
         </form>
        )}
        <div style={{color: 'white'}}>
          Already have an account <Link style={{color: 'white',textDecoration:'none'}}to="login">  <span style={{color: 'red'}}>LOGIN</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
