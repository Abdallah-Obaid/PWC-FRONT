/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import bcryptjs from 'bcryptjs';
import './editProfile.scss';
import useAjax from '../../hooks/ajaxHook';
import { storage } from '../../../firebase/';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const EditProfile = (props) => {
  const [users, setUsers] = useState({});
  const { getUserProfile, userEditHisProfile } = useAjax();
  const history = useHistory();
  const [currentPass, setCurrentPass] = useState('');
  const [pass, setPass] = useState('');



  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      let image = event.target.files[0];
      console.log(image);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(`state_changed`,
        (snapshot) => {
          // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        }, (error) => {
        }, () => {
          storage.ref(`images`).child(image.name).getDownloadURL().then(imageUrl => {
            setUsers({ ...users, 'image': imageUrl });
          });
        });
    }
  };

  function alertEditProfile() {
    Swal.fire({
      icon:'success',
      title: 'Successfull Edit',
    }).then(function() {
      history.push('/profile/EditProfile');
    });
  }
  function alertFaild() {
    Swal.fire({
      icon: 'error',
      title: 'In-valid password',
    });
  }
  const handleInputChange = (event) => {
    if (event.target.name) setUsers({ ...users, [event.target.name]: event.target.value });
    else setUsers(event.target.value);
    console.log(users, 'usersusersusersusers');
  };

  const handleSubmit = async (event) => {
    if(event) event.preventDefault();
    console.log(currentPass, pass);
    let valid = await bcryptjs.compare(currentPass, pass);
    console.log('vvvvv', valid, 'ccccc', currentPass, 'pass', pass);
    if (users.password) {
      // if(valid){
      userEditHisProfile(users);
      alertEditProfile();
      // }else{
      //   alertFaild();
      // }
      // }else{
      //   userEditHisProfile(users);
      //   alertEditProfile();
    }

  };

  useEffect(() => {
    getUserProfile().then(dbUsers => {
      setPass(dbUsers.password);
      setUsers(dbUsers);
    });
  }, []);
  useEffect(() => {
    getUserProfile().then(dbUsers => {
      setPass(dbUsers.password);
      setUsers(dbUsers);
    });
  }, [pass]);

  console.log(props);
  return (
    <>
      <div className="container containerdiv box">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card cardBorder">
                  <div className="card-body ">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto F2Div" >
                            <div className="d-flex justify-content-center align-items-center rounded F3Div" >
                              <img className="imgProfile" src={users.image} width="180" alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap" >{users.username}</h4>
                            <p className="mb-0">@{users.username}</p>
                            <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                            <div className="mt-2">
                              <button className="btn btn-warning buttonR" type="button">
                                <input type="file" className="inputImage" onChange={handleImageChange} size="60" />
                                <i className="fa fa-fw fa-camera"></i>
                                <span className="space-img">Change Photo</span>
                              </button>
                            </div>
                          </div>
                          <div className="text-center text-sm-right div-hi">
                            <span className="badge badge-warning hi">{users.role}</span>
                            <div className="text-muted"><small>{users.signUpDate}</small></div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item"><a href="/profile/EditProfile" className="active nav-link bold setting">Settings</a></li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form1" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label className="bold">Full Name</label>
                                      <input className="form-control" type="text" name='username' onChange={handleInputChange} placeholder='Enter your name' defaultValue={users.username} />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label className="bold">Mobile</label>
                                      <input className="form-control" type="text" name='mobile' onChange={handleInputChange} placeholder='Enter your mobile' defaultValue={users.mobile} />
                                    </div>
                                  </div>

                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label className="bold">E-mail</label>
                                      <input className="form-control" type="text" name='email' onChange={handleInputChange} placeholder='Enter your e-mail' defaultValue={users.email} />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label className="bold">Birthdate</label>
                                      <input className="form-control" type="text" name='birthday' onChange={handleInputChange} placeholder='Enter your birthdate' defaultValue={users.birthday} />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label className="bold" >Bio</label>
                                      <textarea className="form-control" rows="3" name='bio' onChange={handleInputChange} placeholder='Enter your bio' defaultValue={users.bio}></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2 change-pass bold"><b>Change Password</b></div>
                                <div className="row">
                                  <div className="col">
                                    {/* <div className="form-group">
                                      <label className="bold" >Current Password</label>
                                      <input className="form-control" onChange={(e) => setCurrentPass(e.target.value) } type="password" placeholder="••••••••"/>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label className="bold">New Password</label>
                                      <input className="form-control" type="password" placeholder="••••••••" name="password" onChange={handleInputChange} />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                      <input className="form-control" type="password" placeholder="••••••"/></div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                            <div className="row buttonRelative">
                              <div className="col d-flex justify-content-end">
                                <button className="btn btn-warning buttonEP" type="submit" onClick={handleSubmit}>Save Changes</button>
                                <Link className="we" to='/profile'>
                                  <Button className="back-prof btn-block btn btn-warning">Back</Button>
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  savedUser: state.loginReducer,
});

export default connect(mapStateToProps, null)(EditProfile);

