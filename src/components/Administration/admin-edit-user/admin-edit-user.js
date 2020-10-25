/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

import useAjax from '../../hooks/ajaxHook';
import './admin-edit-user.scss';



function AdminEditUser (props) {

  const userInfo = props.location.state.user;
  const {editUser} = useAjax();
  const [selectedUser, setSelectedUser] = useState({});


  const handleInputChange = (event) => {
    // console.log(event.target.value);
    if(event.target.name) setSelectedUser({...selectedUser ,[event.target.name]:event.target.value});
    // else  setSelectedUser(event.target.value);
    console.log(selectedUser);
  }; 

  const handleSubmit = (event) => {
    if(event) event.preventDefault();
    console.log(selectedUser);
    editUser(selectedUser, userInfo._id).then(()=> {
      Swal.fire({
        icon:'success',
        title: 'The changes have been saved',
      });
    });
  };
  
  useEffect(()=>{
    setSelectedUser({'username':userInfo.username, 'email':userInfo.email, 'role':userInfo.role, 'position': userInfo.position});
  },[]);

  return(
    <>
      <br></br>            <br></br>            <br></br>
      <div className="container box rounded bg-white mt-5">
        <div className="row-edit">
          <div className="col-md-4 edit border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5 edit-sec"><img className="edit-image mt-5" src={userInfo.image} width="200" alt='' /> <br></br><h3 className="font-weight-bold">{userInfo.username}</h3><span className="text-black-50">E-mail: {userInfo.email}</span><span className="text-black-50">Position: {userInfo.position}</span><span className="text-black-50">Role: {userInfo.role}</span></div>
          </div>
          <div className="col-md-8 edit">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back "><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <Link to="/profile">
                  </Link>
                </div>
              </div>
              <br></br>

              <form className='adminEdit' onSubmit={handleSubmit}>
                
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label> E-mail</label></div>
                  <div className="col-md-6"><input type="text" className="form-control" name='email' defaultValue={selectedUser.email} onChange={handleInputChange}/></div>
                </div>
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label>Role</label></div>
                  <div className="col-md-6">
                    <Form.Control name='role' onChange={handleInputChange} as="select">
                      <option value=''>Select New Role</option>
                      <option value='user'>User</option>
                      <option value='writers'>Editor</option>
                      <option value='accountant'>Accountant</option>
                      <option value='admin'>Admin</option>
                    </Form.Control>
                  </div>
                </div>
                <div className="row-edit mt-3">
                  <div className="col-md-6"><label>Position </label></div>
                  <div className="col-md-6">
                  
                    <Form.Control name='position' onChange={handleInputChange} as="select">
                      <option value=''>Select New Position</option>
                      <option value='admin'>Admin</option>
                      <option value='marketing'>Marketing</option>
                      <option value='accountant'>Accountant</option>
                      <option value='hr'>Human Resource</option>
                      <option value='qa'>Quality Assurance</option>
                      <option value='developer'>Developer</option>
                      <option value='salesperson'>Sales</option>
                    </Form.Control>
 
                  </div>
                </div>
                <div className="mt-5 text-right">
                  <Link to='/administration'>
                    <Button className="admin-edit-btn" variant="warning">
                          Back
                    </Button>
                  </Link>
                  <Button variant="warning" className="btn-edit" type="submit" onClick={handleSubmit}>Save Profile</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default AdminEditUser;