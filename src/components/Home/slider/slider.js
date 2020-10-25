/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import './slider.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = (props) => {
  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block-slider w-90-res"
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3 className="adv">First slide label</h3>
            <p className="adv">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-slider w-90-res"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3 className="adv">Second slide label</h3>
            <p className="adv">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-slider w-90-res"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3 className="adv">Third slide label</h3>
            <p className="adv">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};


export default Slider;

