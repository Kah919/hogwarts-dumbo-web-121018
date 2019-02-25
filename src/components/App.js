import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
// import hogs from '../porkers_data';
import PiggyContainer from "./PiggyContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < PiggyContainer />
      </div>
    )
  }
}

export default App;
