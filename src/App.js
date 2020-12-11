import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/LandingPage/Home.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Upload from './Components/Dashboard/Upload.js';


function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/login' component = {Login}/>
      <Route exact path = '/in' component = {Dashboard}/>
      <Route exact path = '/register' component = {Register}/>
      <Route exact path = '/up' component = {Upload}/>
    </div>
  );
}

export default App;
