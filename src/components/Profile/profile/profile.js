/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAjax from '../../hooks/ajaxHook';
import Swal from 'sweetalert2';
import { useHistory} from 'react-router-dom';
import './profile.scss';

let hourSalary = {
  admin:    22,
  marketing: 12,
  accountant: 16,
  salesperson :  15,
  hr:8,
  developer:19,
  qa:15,
};

const Profile = (props) => {
  const [users, setUsers] = useState({});
  const {getUserProfile} = useAjax();
  const history = useHistory(); 
  useEffect (() => {
    getUserProfile().then(dbUsers =>{ 
      setUsers(dbUsers);
    });
  },[]);
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card-Profile p-3 py-4 text-center">
          <div className="F1">
            <img src={users.image} /**className="text-center" */ width="100" className="rounded-circle" alt='' />
            <div className="F2">
              <h3 className="mt-2 mb-0 upper"><i className="far fa-id-card"></i>&nbsp;{users.username} </h3> 
              {/* <div className="col mt-3 mb-3"> */}
              <br/>
              <h5 className="upper"><i className="fas fa-user-tag bold"></i>&nbsp;&nbsp;&nbsp;Position:{users.position}</h5>
            </div>
          </div>
          <hr className="line" /> 
          <div className="sixDivP">
            <div className="F1DivP">
              <div className="row-md-4">
                <h5><i className="fas fa-pencil-ruler"></i>&nbsp;Role</h5> <small>{users.role}</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-envelope"></i>&nbsp;E-mail</h5><small>{users.email}</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-calendar-day"></i>&nbsp;Birthdate</h5><small>{users.birthday}</small>
              </div>
            </div>
            <div className="vl"></div>
          
            <div className="F1DivP">
              <div className="row-md-4">
                <h5><i className="fas fa-funnel-dollar"></i>&nbsp;Net Salary</h5><small>{(users.workHours*hourSalary[users.position]).toFixed(2)}JD</small>
              </div>
              <hr className="line" /> 
              <div className="row-md-4">
                <h5><i className="fas fa-business-time"></i>&nbsp;Sign-up Date</h5><small>{users.signUpDate}</small>
              </div>
              <hr className="line" />           
              <div className="row-md-4">
                <h5><i className="fas fa-mobile-alt"></i>&nbsp;Mobile</h5><small>{users.mobile}</small>
              </div>
            </div>
          </div>
          <hr className="line" /> 
          <div className="row-md-4">
            <h5><i className="fas fa-comment-dots"></i>&nbsp;Bio</h5><small>{users.bio}</small>
          </div>
            
          {/* </div> */}
          <hr className="line" /> 
          <div className="profile mt-2">
            <Link to="/profile/EditProfile" className="btnAll btn-5"><span>Edit</span>
            </Link>
            <Link to="/profile/Feedback" className="btnAll btn-5"><span>Complaint</span>
            </Link>
          </div>
          <div className="social-buttons mt-4"> <button className="neo-button"><i className="fa fa-facebook fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-linkedin fa-1x"></i></button> <button className="neo-button"><i className="fa fa-google fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button> <button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button> </div>

        </div>
        
      </div>
    </>
  );
};


export default Profile;

