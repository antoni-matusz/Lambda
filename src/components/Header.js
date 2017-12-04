import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img src='/images/logo.png' alt='logo'/>
            </div>
            <div className='col-md-7'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Igredients</li>
                <li>Menu</li>
                <li>Reviews</li>
                <li>Reservations</li>
              </ul>
            </div>
            <div className='col-md-3 icons-box'>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-youtube" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
          <div className='row'>
            <h1 className='col-md-12'>the right ingredients for the right food</h1>
          </div>
          <div className='row'>
            <img src='/images/devider.png'className='col-md-12 devider' alt='devider'/>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <button className="book-button">book a table</button>
            </div>
            <div className='col-md-6'>
            <button>see the menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
