import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div className='review-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-box'>
                    <h2>Just the right food</h2>
                    <img src='/images/devider-1.png' alt='devider'/>
                    <p>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! 
                    </p>
                    <img src='/images/img-1.png' alt='cook'/>
                </div>
                <div className='col-md-6'>
                    <img src='/images/img-2.png' alt='plate'/>
                </div>
           
            </div>
         
        </div>
      </div>
    );
  }
}

export default Review;