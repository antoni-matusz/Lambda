import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header-bg'>
        <div className='container'>
          <div className='row'>
            <img src ='/images/logo.png' className='col-md-2'/>
            <ul className='col-md-9'>
              <li>Home</li>
              <li>About</li>
              <li>Igredients</li>
              <li>Menu</li>
              <li>Reviews</li>
              <li>Reservations</li>
            </ul>
            <div className='col-md-1 icons-box'>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>the right ingredients for the right food</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
