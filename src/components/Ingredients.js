import React, { Component } from 'react';

class Ingredients extends Component {
  render() {
    return (
      <div className='ingredients-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 description-box'>
                <h3>Fine ingredients</h3>
                <img src='\images\devider-2.png' alt='devider'/>
                <p>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
                <img src='\images\img-3.png' alt='ingredients'/>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ingredients;