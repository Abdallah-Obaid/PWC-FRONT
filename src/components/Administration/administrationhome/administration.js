/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import useAjax from '../../hooks/ajaxHook';
import useSearch from '../../hooks/searchHook';
import './administration.scss';





const AdministrationHome = (props) => {
  const {getUsers} = useAjax();
  const {handleSearch} = useSearch();
  const [users, setUsers] = useState([]);
  const [searchName, setName] = useState('');
  
  const handleChange = event => {
    setName(String(event.target.value) || '');
    console.log(searchName);
  };  
  

  useEffect(()=>{
    try {
      console.log('adminHome');
      getUsers().then(dbUsers => setUsers(dbUsers) );
    } catch (error) {
      console.log(error);
    }
  },[]);

 

  return (
    <>
      <h1 className='administrationHome'>Administration</h1>
      
      <Link to='/administration/adduser'>
        <Button className="admin-home" variant="warning">
         Add New User
        </Button>
      </Link>

      <Link to='/administration/acceptuser'>
        <Button className="admin-home accept" variant="warning">
          Accept Users
        </Button>
      </Link>

      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search by User Name..." onChange= {handleChange}/>
          <a href className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>

      <div className="container mt-5 box table-admin">
        <Table responsive >
          <thead>
            <tr className="border-bottom">
              <th> <span className="ml-2">User Name</span> </th>
              <th> <span className="ml-2"></span> E-mail </th>
              <th> <span className="ml-2"></span> Position </th>
              <th> <span className="ml-2">Role</span> </th>
              <th> <span className="ml-2">Edit</span> </th>
            </tr>
          </thead>
          <tbody>
            {handleSearch(users, searchName).map (value =><tr key={value._id} className="border-bottom"> 
              <td>
                <div className="p-2"> <span className="d-block-admin font-weight-bold"></span>  <div className="d-flex-admin flex-column ml-2"> <span className="d-block-admin font-weight-bold"> <li className="d-block-admin font-weight-bold admin-list" value={value}>
                  {value.username} 
                </li></span></div> </div>
              </td>
              <td>
                <div className="p-2 d-flex-admin flex-row align-items-center mb-2"> 
                  <div className="p-2"> <span className="font-weight-bold">{value.email}</span> </div>
                </div>
              </td>
              <td>
                <div className="p-2"> <span className="font-weight-bold">{value.position}</span> </div>
              </td>
              <td>
                <div className="p-2 d-flex-admin flex-column"> <span>{value.role}</span>  </div>
              </td>
              <td>
                <Link to={{
                  pathname: `/administration/edituser`,
                  state: {
                    user: value,
                  },
                }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>, 
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};


export default AdministrationHome;