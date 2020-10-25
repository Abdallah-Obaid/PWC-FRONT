import cookie from 'react-cookies';

let API = 'https://pwc-task.herokuapp.com';


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

  const getAllComplaints = async () => {
    const response = await fetch(`${API}/usercomplaints`, {
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

  const getAllComplaintsAdmin = async () => {
    const response = await fetch(`${API}/allcomplaints`, {
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


  const acceptUser = async (user) => {
    console.log(user);
    let myUser = {
      '_id': `${user._id}`,
      'username': `${user.username}`,
      'email': `${user.email}`,
      'password': `${user.password}`,
      'position': `developer`,
      'role': `${user.role}`,

    };
    fetch(`${API}/accept`, {
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
    fetch(`${API}/reject/${user._id}`, {
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
    fetch(`${API}/adduser`, {
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
        'position': `${user.position}`,
        'role': `${user.role}`,
      }),
    });
  };

  const userEditHisProfile = (users) => {
    fetch(`${API}/usereditprofile`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        '_id': `${users._id}`,
        'username': `${users.username}`,
        'password': `${users.password}`,
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
    fetch(`${API}/adminedit/${userId}`, {
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
        'position': `${user.position}`,
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

  const userSignUp = async (user) => {
    try {
      await fetch(`${API}/signup`, {
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
  const updateStatus = async (complaint) => {
    console.log(complaint, 'complaintcomplaintcomplaintcomplaint');
    await fetch(`${API}/allnotseencomplaints`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        '_id': complaint._id,
        'status': complaint.status,
        'content': complaint.content,
        'subject': complaint.subject,
        'mobile': complaint.mobile
      }),
    });
  };

  const userComplaint = async (userMessage) => {
    await fetch(`${API}/addcomplaint`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        'content': `${userMessage.content}`,
        'subject': `${userMessage.subject}`,
        'mobile': `${userMessage.mobile}`,
      }),
    });
  };

  return { getUsers, editUser, addUser, acceptUser, rejectUser, getTempUsers, getUserProfile, userSignUp, userEditHisProfile, userComplaint, getAllComplaints, getAllComplaintsAdmin, updateStatus };
};

export default useAjax;