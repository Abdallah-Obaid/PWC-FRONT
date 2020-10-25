/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

import useAjax from '../../hooks/ajaxHook';
import './admin-add-user.scss';


function AdminAddUser(props) {
  const [newUser, setNewUser] = useState({});
  const {addUser} = useAjax();
  const handleInputChange = event => {
    setNewUser({...newUser, [event.target.name]: event.target.value });
  };

  function alertAddUser() {
    Swal.fire({
      icon:'success',
      title: 'A new User has been added',
    });
  }

  function handleSubmit(event){
    if(event) event.preventDefault();
    event.target.reset();
    addUser(newUser).then(()=> alertAddUser());
  }

  return (
    <>
      <div className="row-add box">
        <div className="col-sm-4 text-center abc">
          <form onSubmit={handleSubmit}>
            <p className="h4 mb-4 text-left">User's Informations</p>
            <label htmlFor="defaultLoginFormUsername" className="in">Username</label>
            <input name='username' onChange={handleInputChange} type="text" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Enter Username" />
            <label htmlFor="defaultLoginFormEmail" className="in">Email</label>
            <input name='email' onChange={handleInputChange} type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter E-mail" />
            <label htmlFor="defaultLoginFormPassword" className="in">Password</label>
            <input name='password' onChange={handleInputChange} type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" />
            <label htmlFor="defaultLoginFormBirthday" className="in">Birthdate</label>
            <input name='birthday' onChange={handleInputChange} type="date" id="defaultLoginFormBirthday" className="form-control mb-4" placeholder="Enter BD" />
            <label htmlFor="defaultLoginFormPosition" className="in">Position</label>
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
            <label htmlFor="defaultLoginFormRole" className="in">Role</label>
            <Form.Control name='role' onChange={handleInputChange} as="select">
              <option value=''>Select New Role</option>
              <option value='user'>User</option>
              <option value='writers'>Editor</option>
              <option value='accountant'>Accountant</option>
              <option value='admin'>Admin</option>
            </Form.Control>           
            <div className="d-flex justify-content-left">
            </div>
            <Button className="btn-add  btn-block btn-warning" type="submit">ADD NEW USER</Button>
            <Link className="we" to='/administration'>
              <Button className="btn-add btn-block btn-warning">Back</Button>
            </Link>
          </form>
        </div>
        
        <div className="col-sm-8 xyz text-center" > <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
          <h2 className="account-text">Create New User Account</h2>
        </div>
      </div>
    </>
  );
}


export default AdminAddUser;