import cookie from 'react-cookies';

let API = 'https://ems-access-denied.herokuapp.com';


const useAjax = () => {
  const token = cookie.load('auth');

  const getUsers = async () => {
    const response = await fetch(`${API}/adminpermanent`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const getTempUsers = async () => {
    try {
      const response = await fetch(`${API}/admincheckuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
   
  };


  const acceptUser = async (user) =>{
    console.log(user);
    let myUser = { 
      '_id':`${user._id}`,
      'username': `${user.username}`,
      'email': `${user.email}`,
      'password': `${user.password}`,
      'position': `developer`,
      'role': `${user.role}`,
    
    };
    fetch( `${API}/accept`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(myUser),
    }); 

  };

  const rejectUser = async (user) => {
    fetch( `${API}/reject/${user._id}`, {
      method: 'delete',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }); 
  };

  const addUser = async (user) => {
    fetch( `${API}/adduser`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        'username': `${user.username}`,
        'email': `${user.email}`,
        'password': `${user.password}`,
        'birthday': `${user.birthday}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  };

  const userEditHisProfile = (users) => {
    fetch( `${API}/usereditprofile`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        '_id':`${users._id}`,
        'username':`${users.username}`,
        'password':`${users.password}`,
        'email': `${users.email}`,
        'image': `${users.image}`,
        'gender': `${users.gender}`,
        'birthday': `${users.birthday}`,        
        'bio': `${users.bio}`,
        'mobile': `${users.mobile}`,
      }),
    }); 
  };

  const editUser = async (user, userId) => {
    fetch( `${API}/adminedit/${userId}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        'email': `${user.email}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  };

  const getUserProfile = async () => {
    const response = await fetch(`${API}/getuserprofile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const userStartWork = async () => {
    const response = await fetch(`${API}/userstart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const userEndWork = async () => {
    const response = await fetch(`${API}/userend`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const userSignUp = async (user) => {
    try {
      await fetch( `${API}/signup`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          'username': `${user.username}`,
          'email': `${user.email}`,
          'password': `${user.password}`,
          'image': `${user.image}`,
          'role': 'user',
        }),
      });    
    } catch (error) {
      console.log(error);
    }
  };

  const accountantHandler = async (user) =>{
    console.log(user);
    console.log(user.startDate, typeof(user.startDate));
    let startDate1=user.startDate;
    let endDate1=user.endDate;
    startDate1 = startDate1.split('-').reverse().join('/');
    endDate1 = endDate1.split('-').reverse().join('/');
    console.log(endDate1, startDate1,'date');
    let data = { 
      // '_id':`${user._id}`,
      'livingAllowance': Number(user.livingAllowance),
      'rewards': Number(user.rewards),
      'startDate': startDate1,
      'endDate': endDate1,
    };
    //   { "rewards":12,
    //   "livingAllowance":40,
    //  "startDate":"2020/08/06",
    //  "endDate":"2020/08/07"
    //        }
    console.log(data,'useruseruseruser');
    const response = await fetch( `${API}/accountantmain/${user._id}`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }); 
    const result = await response.json();
    console.log(result);
    return result;
  };

  // const userVacation = async (userId, userMessage) =>{
  //   await fetch( `${API}/uservacation`, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(userMessage),
  //     user:userId,
  //   }); 
  // };

  return {getUsers, editUser, addUser, acceptUser, rejectUser, getTempUsers, getUserProfile, userSignUp, userEditHisProfile,userStartWork,userEndWork,accountantHandler};
};

export default useAjax;