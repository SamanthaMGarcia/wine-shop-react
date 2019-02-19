import React, { Component } from 'react';

// import Counter from './src/components/Counter'
// import WineCard from './src/components/Winecard'
//
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Wines from './Wines';
import About from './About';
import Recommendations from './Recommendations';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* < Wines /> */}
      <Router>
        <div>
          <ul>
            <li><Link to="/">Wines</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
          </ul>

          <hr/>
            <Route exact path="/" component={Wines}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/recommendations" component={Recommendations}/>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
