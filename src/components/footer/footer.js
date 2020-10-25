/* eslint-disable no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
import './footer.scss';


const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">COMPANY NAME<span></span></h5>
                <p className="txt">The Employee management system is a fully functional web application that
              organize the operation of managing employee data. </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <Link className="nav-link" to="/Administration">Administration</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <Link className="nav-link" to="/financialmanagement">Financial Management</Link></div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <Link className="nav-link" to="/profile">Profile</Link></div>
                  </li>
                  
                  <li>
                    <div className="thumb-content">
                      <Link className="nav-link" to="/about-us">About-us</Link></div>
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 started">
              <div className="widget no-box">
                <h5 className="widget-title">Location<span></span></h5>
                <div className="footer-section1 map">
                  <iframe title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.319914211971!2d35.8663810146408!3d31.897904135594967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca6e3c8e41335%3A0x38b7f4b7f0dc25d0!2sLuminus%20College!5e0!3m2!1sen!2sjo!4v1587282960933!5m2!1sen!2sjo"
                    width="400" height="300" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
               
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 map-footer">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us<span></span></h5>
                <p><p className="txt">Please contact us for any further assistance.</p>
                  
              
                  <span><i className="fa fa-phone"></i> &nbsp; 123-456-789</span>
                  <br></br>
                  <a className="a-footer" href="ems@gmail.com" title="glorythemes"> <i className="fa fa-envelope"></i> &nbsp; ems@gmail.com</a></p>
              
                <ul className="social-footer2">
                 
                
                  <li><a className="facebook" href="/"><i className=" fa fa-facebook fa-2x"></i></a></li>
                  <li><a className="twitter" href="/"><i className=" fa fa-twitter fa-2x"></i></a></li>
                  <li><a className="dribbble" href="/"><i className="fa fa-github fa-2x"></i></a></li>
                  <li><a className="linkedin" href="/"><i className=" fa fa-linkedin fa-2x"></i></a></li>
                </ul>
      
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row-footer">
              <div className="col-md-12 text-center">
                <p>Copyright EMS © 2020. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
