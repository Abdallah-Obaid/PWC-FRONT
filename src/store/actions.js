/* eslint-disable no-unused-vars */
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

let API = 'https://ems-access-denied.herokuapp.com';

// SignUp Action
// export const userSignUp = user => async () => {
//   try {
//     await fetch( `${API}/signup`, {
//       method: 'post',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         'username': `${user.username}`,
//         'email': `${user.email}`,
//         'password': `${user.password}`,
//         'image': `${user.image}`,
//         'role': 'user',
//       }),
//     });    
//   } catch (error) {
//     console.log(error);
//   }
// };

export const userSignIn = user => async dispatch => {
  if(user){
    try {
      let results = await fetch( `${API}/signin`,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}`,
        }),
      });
      let jsonResult = await results.json();
      console.log(jsonResult.token);
      validateToken (jsonResult.token);
    } catch (error) {
      console.log(error);
    }
  }
  function validateToken (token) {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'ysecrettokenkey');
      setLoginState(true, token, user);
    } catch (error) {
      logout();
      console.log(error);
    }
  }
  
  function setLoginState (loggedIn, token, user){
    cookie.save('auth', token);
    dispatch(loginUser({loggedIn, token, user}));
  }
  
  function logout (){
    setLoginState(false, null, {});
  }

  const cookieToken = cookie.load('auth');
  const token = cookieToken; 
  validateToken(token);
};


export const userSignOut = () => {
  function setLoginState (loggedIn, token, user){
    cookie.save('auth', token);
    return loginUser({loggedIn, token, user});
  }
  return setLoginState(false, null, {});
};



export const loginUser = userObj => {
  return (
    {
      type: 'SET_LOGIN',
      payload: userObj,
    });
};