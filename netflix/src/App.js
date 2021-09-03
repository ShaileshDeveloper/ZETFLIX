import Home from "./screens/Home/home";
import "./app.css";
import { Redirect, Route } from "react-router-dom";
import Watch from "./screens/watch/watch";
import Register from "./screens/register/register";
import Login from "./screens/Login/login";
import MyList from "./screens/MyList/MyList"
import {useContext} from "react"
import {AuthContext} from "./context/authContext/authContext"

function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      <Route path="/" exact>
       <Home type="movie"/>
      </Route>
      <Route path="/series">
       <Home type='series'/>
      </Route>
      <Route path="/watch">
       {user ?<Watch />: <Redirect to='register'/>} 
      </Route>
      <Route path="/register">
        {!user ? <Register /> : <Redirect to='/' />}
      </Route>
      <Route path="/login" >
      {!user ?<Login /> :<Redirect to='/' />} 
      </Route>
      <Route>

        <Route path='/mylist'><MyList  /></Route>
      </Route>
    </div>
  );
}

export default App;
