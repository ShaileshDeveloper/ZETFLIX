import React, { useRef, useState } from "react";
import "./login.css";


function Login() {
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
      <div className="login_container">
        <h3>Ready to see some football action on Zetflix lets do it</h3>
       <form>
        
           <input className="email_input"placeholder="email"/>
           <input className="email_input" placeholder="password"/>
           <button className="login_button">Login in</button>
       </form>
      </div>
    </div>
  );
}

export default Login;
