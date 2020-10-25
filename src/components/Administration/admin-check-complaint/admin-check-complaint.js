/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAjax from '../../hooks/ajaxHook';
import './admin-check-complaint.scss';
import Paginate from '../../paginate/paginate';


function AdminAcceptUser(props) {

  let [complaints, setComplaints] = useState([]);
  const { getAllComplaintsAdmin } = useAjax();
  const { updateStatus } = useAjax();


  const handleChange = event => {
    try {
      let complaint = {};
      complaints.forEach(ele => {
        if (ele._id === event.target.name) {
          ele.status = event.target.value;
          complaint = ele;
        }
      });
      updateStatus(complaint);
      setComplaints([...complaints]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      console.log('adminAcceptUser');
      getAllComplaintsAdmin().then(complaints => setComplaints(complaints));
    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <>
      <br></br>            <br></br>            <br></br>            <br></br>



      <div className="container mt-5">
        <table className="table table-borderless table-responsive card-1 p-4">
          <div className="table-head">


            <thead >
              <tr className="border-bottom">
                <th> <span className="ml-2">User</span> </th>
                <th> <span className="ml-2">Subject</span> </th>
                <th> <span className="ml-2"></span> </th>
                <th> <span className="ml-2">Content</span> </th>
                <th> <span className="ml-4">Status</span> </th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(value => <tr key={value._id} className="border-bottom">
                <td>
                  <div className="d-flex flex-column ml-2"> <span className=" font-weight-bold spanEdit"> <li className="spanEdit font-weight-bold" value={value}>
                    {value.username}
                  </li></span></div>                </td>
                <td>
                  <div className="p-2 d-flex flex-row align-items-center mb-2">
                    <div className="d-flex flex-column ml-2"> <span className=" font-weight-bold spanEdit"> <li className="spanEdit font-weight-bold" value={value}>
                      {value.subject}
                    </li></span></div>
                  </div>
                </td>
                <td>
                  <div className="p-2"> <span className="font-weight-bold">{value.position}</span> </div>
                </td>
                <td>
                  <div className="p-2 d-flex flex-column"> <span>{value.content}</span>  </div>
                </td>
                <td>
                  {/* <div className="p-2 icons"> <button onClick={()=> acceptUser(value)}>Add User</button>

                    <button onClick={()=> rejectUser(value)}>Remove User</button> </div> */}

                  <div className="p-2 icons">
                    <input type="radio" id="pending" name={value._id} onChange={handleChange} value="pending" checked={value.status === 'pending'} />
                    <label for="Pending"> Pending</label>
                    <input type="radio" id="resolve" name={value._id} onChange={handleChange} value="resolve" checked={value.status === 'resolve'} />
                    <label for="female"> Resolve</label>
                    <input type="radio" id="reject" name={value._id} onChange={handleChange} value="reject" checked={value.status === 'reject'} />
                    <label for="other"> Reject</label>
                  </div>
                </td>
              </tr>,
              )}

            </tbody>
          </div>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-accept">
            <li class="page-item">
              <a class="page-link" href="!#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>

            </li>
            <li class="page-item">
              <a class="page-link" href="!#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <Link className="we-accept" to='/administration'>
          <Button className="btn-warning accept">Back</Button>
        </Link>
      </div>
    </>
  );
}


export default AdminAcceptUser;