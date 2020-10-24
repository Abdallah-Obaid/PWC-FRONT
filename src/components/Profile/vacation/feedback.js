/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import './feedback.scss';
import { Link } from 'react-router-dom';

const Feedback = (props) => {
  function alert() {
    Swal.fire({
      title: 'We got your request',
      text: 'Have a nice day <3 ',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }
  
  return (
    <>
      <section className="contact-section my-5 sectionVa">
        <div className="card-vacation">
          <div className="row">
            <div className="col-lg-8">
              <div className="card-body form">
                <h3 className="mt-4"><i className="fas fa-envelope pr-2"></i>Vacation Request</h3>
                <div className="col">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="form-contact-name" className="">Your name</label>
                      <input type="text" id="form-contact-name" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="form-contact-email" className="">Your email</label>
                      <input type="text" id="form-contact-email" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="form-contact-phone" className="">Your phone number</label>
                      <input type="text" id="form-contact-phone" className="form-control" />
                    </div>
                  </div>

                  {/* <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label for="form-contact-company" className="">Your company</label>
                      <input type="text" id="form-contact-company" className="form-control" />
                    </div>
                  </div> */}

                </div>

                <div className="col">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="form-contact-message">Your message</label>
                      <textarea id="form-contact-message" className="form-control md-textarea" rows="3"></textarea>
                    </div>
                  </div>

                  <div className="send-vac">
                    <Button className=" btn btn-warning" onClick={alert}>Send</Button>
                    <Link to='/profile'><Button className=" btn back-btn btn-warning">Back</Button></Link>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-body contact text-center h-100 white-text">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                  <li>
                    <p><i className="fas fa-map-marker-alt pr-2"></i>Amman, Jordan</p>
                  </li>
                  <li>
                    <p><i className="fas fa-phone pr-2"></i>+962 00223344</p>
                  </li>
                  <li>
                    <p><i className="fas fa-envelope pr-2"></i>ems@gmail.com</p>
                  </li>
                </ul>
                <hr className="hr-light my-4" />
                <ul className="list-inline text-center list-unstyled">
                  <li className="list-inline-item">
                    <a href className="p-2 fa-lg tw-ic">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href className="p-2 fa-lg li-ic">
                      <i className="fab fa-linkedin-in"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href className="p-2 fa-lg ins-ic">
                      <i className="fab fa-instagram"> </i>
                    </a>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Feedback;