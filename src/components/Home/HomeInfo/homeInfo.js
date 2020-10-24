/* eslint-disable no-unused-vars */
import React from 'react';
import './homeInfo.scss';


const HomeInfo = (props) => {
  return (
    <>
      <img className="w-100 left-img box" data-aos="fade-up" src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>

      <div className="main-div">
        <div className="first-div">
          <img className="right-img box res-width right-i" data-aos="fade-up" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt=""/>
          <p className=" text-justify width-res right-p" data-aos="fade-up">The Employee management system is a fully functional web application that organize the operation of managing employee data such as his salary, perks, Work Time, login, employee efficiency, employee personal information, generate his salary which depends on his overtime work.</p>
        </div>
        <div className="sec-div">
          <img className=" left-img box res-width left-i" data-aos="fade-up" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt=""/>
          <p className=" text-justify width-res left-p" data-aos="fade-up">Also EMS has administration capabilities of adding new employee, deleting employee and the employee can also view his profile and can request for vacation, ask for a pay-rise and take scheduled days off.</p>
        </div>
      </div>
    </>
  );
};


export default HomeInfo;
