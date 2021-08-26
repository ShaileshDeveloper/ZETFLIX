import React, { useRef, useState } from "react";
import "./register.css";


function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailref = useRef();
  const passwordref = useRef();
  function handleClick() {
    setEmail(emailref.current.value);
  }

  function handleForm(){
      setPassword(passwordref.current.value)
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
            <input className="email_input" placeholder="what's your password" ref={passwordref}/>
            <button onClick={handleForm}>Start</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
