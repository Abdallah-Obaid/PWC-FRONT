/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import useAjax from '../hooks/ajaxHook';
import useSearch from '../hooks/searchHook';
import './Complaint.scss';

const ComplaintManagement = (props) => {
  const { getAllComplaints } = useAjax();
  const [dbMsg, setMsg] = useState([]);
  const [select, setSelectData] = useState([]);
  const [selctedComp, setselctedComp] = useState([]);
  const [searchName, setName] = useState('');
  const { handleSearch } = useSearch();


  const handleChange = event => {
    setName(String(event.target.value) || '');
    console.log(searchName);
  };


  const selectUser = (value) => {
    if (select._id) document.getElementById(select._id).style.background = '';
    setSelectData({ ...select, '_id': value._id });
    document.getElementById(value._id).style.background = 'linear-gradient(145deg, rgb(150 164 139), rgb(136 124 87))';
    console.log(value._id, 'divdivdivdivdiv');
    setselctedComp({ ...selctedComp, content: value.content, mobile: value.mobile, subject: value.subject, status: value.status });
    console.log(selctedComp, 'selctedCompselctedCompselctedComp');
  };


  useEffect(() => {
    console.log('adminAddUser');
    getAllComplaints().then(dbMsg => setMsg(dbMsg));
  }, []);

  return (
    <>
      <div className="cardFinancial">
        <div className="rowFinanc">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4><b>Complaints List</b></h4>

                </div>
              </div>
            </div>
            <div className="searchbarAndTxt">
              <h6 className="bold"><b>Select complaint for more info </b></h6>
              <div className="d-flex justify-content-center davdovy">
                <div className="searchbar">
                  <input className="search_input" type="text" name="" placeholder="Search ...." onChange={handleChange} />
                  <a href="!#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
              </div>
            </div>
            <div className="hiGuys">
              {handleSearch(dbMsg, searchName).map(value =>
                <div className="row border-top border-bottom div-fin " onClick={e => selectUser(value)} id={value._id} key={value._id}>
                  <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid imgfin" src='https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif' alt='deleted' /></div>
                    <div className="col">
                      <div className="row">{value.subject}</div>
                      <div className="row text-muted">{value.status}</div>
                    </div>
                    <div className="col">Content: {value.content || 0} </div>
                  </div>
                </div>,
              )}
            </div>
          </div>
          <div className="col-md-4-finincial summary">
            <div>
              <h5 className="h5fin"><b>More info:</b></h5>
            </div>

            <form className="formFin">
              <div className="f-input">
                <label className="bold">Subject</label> <input className="inputFin" id="code" name='livingAllowance' placeholder='Subject' value={selctedComp.subject} />
                <label className="bold">Status</label> <input className="inputFin" id="code2" name='rewards' placeholder='Status' value={selctedComp.status} />
                <label className="bold">Related number</label> <input type="text" className="inputFin" id="code4" name='endDate' placeholder='Related number' value={selctedComp.mobile} />
                <label className="bold">Content</label> <textarea className="inputFin" id="code3" name='startDate' placeholder='Content' value={selctedComp.content} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintManagement;