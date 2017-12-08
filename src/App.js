import React, { Component } from 'react';
import Header from './components/Header';
import Review from './components/Review';
import Ingredients from './components/Ingredients';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Review/>
        <Ingredients/>
      </div>
    );
  }
}

export default App;
