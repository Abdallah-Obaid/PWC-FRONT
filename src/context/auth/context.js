/* eslint-disable quotes */
import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// const base64 = require('base-64');


const API = process.env.REACT_APP_API || 'https://access-denied-lab-32.herokuapp.com';
// https://class-34-auth.herokuapp.com
// demo : username: rawan_nujoom , password: 1234
// demo : username: rawan_user , password: 1234
export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token:null,
      login: this.login,
      logout: this.logout,
      signup: this.signup,
      user: {},
    };
  }

    login = async(username, password) => {

      try {
        const results = await fetch( `${API}/signin`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: new Headers({
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
          }),
        });
        let res = await results.json();
        console.log('res: ', res);
        console.log('res.token: ', res.token);
        // validate the token from res
        this.validateToken(res.token);
      } catch(ex) {
        console.error(ex);
      }
    }

    logout = () => {
      this.setLoginState(false, null, {});
    }

    validateToken = token => {

      try {
        console.log(process.env.REACT_APP_SECRET);
        let user = jwt.verify(token, process.env.REACT_APP_SECRET || '12345678910');
        console.log('user: ',user);
        // update the login context to loggedin
        this.setLoginState(true, token, user);
      } catch (ex) {
        // on err update the login context to loggedout
        this.logout();
        console.log('token Validation error');
      }
    }
    
    setLoginState = (loggedIn, token, user) => {
      cookie.save('auth', token);
      this.setState({token, loggedIn, user});
    }
    
    componentDidMount() {
      const cookieToken = cookie.load('auth');
      const token = cookieToken || null;
      this.validateToken(token);
    }

    signup = async(username, password) => {

      try {
        const results = await fetch( `${API}/signup`, {
          method: 'post',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            'username': `${username}`,
            'password': `${password}`,
            'role': 'user',
          }),
        });
        let res = await results.json();
        console.log('res: ', res);
        console.log('res.token: ', res.token);
        // validate the token from res
        await alert("Hello! I am an alert box!!");
        this.validateToken(res.token);
      } catch(ex) {
        console.error(ex);
        await alert("Hello! I am an alert box!!");
      }
    }

    render() {
      return (
        <LoginContext.Provider value={this.state}>
          {this.props.children}
        </LoginContext.Provider>
      );
    }
}

export default LoginProvider;
