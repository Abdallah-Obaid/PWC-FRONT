/* eslint-disable no-unused-vars */
import React from 'react';
import './homePosts.scss';



const HomePosts = (props) => {
  return (
    <>
      <div className='container-fluid mx-auto mt-5 mb-5 col-12 mid'>
        <div className="hd">Why People Believe in Us</div>
        <p className = "space"><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
        <div className="row-posts" >
          <div className="card-posts col-md-3 col-12" data-aos="fade-up">
            <div className="card-content">
              <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" alt='' />
                <div className="shadow"></div>
                <div className="card-title"> We're Free </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-posts col-md-3 col-12 ml-2" data-aos="fade-up">
            <div className="card-content">
              <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" alt='' />
                <div className="card-title"> We're Unbiased </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-posts col-md-3 col-12 ml-2" data-aos="fade-up">
            <div className="card-content">
              <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" alt='' />
                <div className="card-title"> We Guide you </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default HomePosts;

