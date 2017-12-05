import React, { Component } from 'react';
import Header from './components/Header';
import Review from './components/Review';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Review/>
      </div>
    );
  }
}

export default App;
