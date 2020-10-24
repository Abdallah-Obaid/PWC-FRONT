/* eslint-disable no-unused-vars */
import React from 'react';

import Slider from './slider/slider';
import HomeInfo from './HomeInfo/homeInfo';
import CompanyValues from './companyValues/companyValues';
import HomePosts from './homePosts/homePosts';
import './home.scss';


const Home = (props) => {
  return (
    <>
      <Slider />
      <CompanyValues />
      <HomeInfo />
      <HomePosts />
    </>
  );
};

export default Home;
