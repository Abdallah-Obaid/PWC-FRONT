import React from 'react';
import {connect} from 'react-redux';
import Show from '../components/show/show';

function Auth (props){
  let okToRender= false;
  try {
    okToRender = props.savedUser.loggedIn && (
      props.capability ? props.savedUser.user.capabilities.includes(props.capability) : true
    );
  } catch (error) {
    console.warn('NOT AUTHORIZED');
  }

  return(
    <Show condition = {okToRender}>
      {props.children}
    </Show>
  );

}

const mapStateToProps = (state) => ({
  savedUser: state.loginReducer,
});

export default connect (mapStateToProps, null) (Auth);