/* eslint-disable no-unused-vars */
import React from 'react';

import Slider from './slider/slider';
import HomePosts from './homePosts/homePosts';
import './home.scss';


const Home = (props) => {
  return (
    <>
      <Slider />
      <HomePosts />
    </>
  );
};

export default Home;
