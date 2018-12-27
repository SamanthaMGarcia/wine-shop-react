import React, { Component } from 'react';

import Wines from './Wines';
import './App.css';

// const wines = [
//   {
//     name: "Summer in a Bottle",
//     year: 2018,
//     price: 35,
//     img_url: "https://fashionweekdaily.com/wp-content/uploads/2014/05/Summer-in-a-Bottle-2013.jpg"
//   },
//   {
//     name: "Barrique",
//     year: 2015,
//     price: 19,
//     img_url: "https://www.garyswine.com/images/sites/garyswine/labels/brack-mountain-wine-co.-barrique-sonoma-coast-pinot-noir_1.jpg"
//   }
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wines />
      </div>
    );
  }
}

export default App;
