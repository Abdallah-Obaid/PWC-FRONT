/* eslint-disable no-unused-vars */
import React, {useState, useEffect}  from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import io from 'socket.io-client';


function Chat(props) {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'http://localhost:4000/';

  const socket = io(ENDPOINT);

  function handleSubmit(event){
    event.preventDefault();
    event.target.reset();
    let payload = {userName:props.savedUser.username , message:'hello'};
    socket.emit('newmessage', payload);
  }

  return(
    <>
      <br></br>     <br></br>    <br></br>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(event)=> setMessage(event.target.value)} />
        <button type='submit'>send</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  savedUser: state.loginReducer,
});

export default connect (mapStateToProps, null) (Chat);