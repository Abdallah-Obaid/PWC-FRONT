/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routes from './router';
import {connect} from 'react-redux';
import {userSignIn} from './store/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  useEffect(()=>{
    props.userSignIn();
  },[props]);
  return (
    <>
      <Header />
      <Routes />
      <Footer />     
    </>
  );
}
const mapDisPatchToProps = {userSignIn};
export default connect(null, mapDisPatchToProps)(App);
