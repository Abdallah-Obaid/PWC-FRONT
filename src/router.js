/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/home';
import Administration from './components/Administration/administrationhome/administration';
import AdminAddUser from './components/Administration/admin-add-user/admin-add-user';
import AdminAcceptUser from './components/Administration/admin-accept-user/admin-accept-user';
import AdminEditUser from './components/Administration/admin-edit-user/admin-edit-user';
import FinancialManagement from './components/Financial-Management/financial';
import Profile from './components/Profile/profile/profile';
import EditProfile from './components/Profile/edit-profile/editProfile';
import Feedback from './components/Profile/vacation/feedback';
import Signin from './components/Sign-in/signin';
import Chat from './components/chat/chat';
import About from './components/About-Us/aboutus';


const Routes = (props) => {
  return (
    <>
      <Route path="/" component={Home} exact />

      <Route path="/administration" component={Administration} exact />
     
      <Route path='/administration/adduser' component= {AdminAddUser} exact />

      <Route path='/administration/acceptuser' component= {AdminAcceptUser}  exact />

      <Route path='/administration/edituser' component= {AdminEditUser} exact />

      <Route path="/financialmanagement" component={FinancialManagement} exact />

      <Route path="/profile" component={Profile} exact />

      <Route path="/profile/EditProfile" component={EditProfile} exact />

      <Route path="/profile/Feedback" component={Feedback} exact />

      <Route path="/signin" component={Signin} exact />

      <Route path="/chat" component={Chat} exact />

      <Route path="/about-us" component={About} exact />
    </>
  );
};

export default Routes;