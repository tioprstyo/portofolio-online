import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import PortoFolio from './PortoFolio';

class App extends React.Component {
  render () {
    return(
    <div className = "App" >
        <Router>
          <Routes>
            <Route path="/" element={<PortoFolio />}></Route>
          </Routes>
        </Router>
    </div>
  );
    }
  
}

export default App;
