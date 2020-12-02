import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/LandingPage/Home.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/in' component = {Dashboard}/>
    </div>
  );
}

export default App;
