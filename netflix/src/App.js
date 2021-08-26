import Home from "./screens/Home/home"
import './app.css'
import {Route} from 'react-router-dom'
import Watch from './screens/watch/watch'
import Register from './screens/register/register'
import Login from "./screens/Login/login"


const Pome =() => 'pome'
function App() {
  return (
    <div className="App">
     <Route path='/' component={Home} exact/>
     <Route path='/watch' component={Watch} />
     <Route path='/register' component={Register} />
     <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
