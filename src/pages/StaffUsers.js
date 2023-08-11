import React, { useState,useEffect } from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'
import { ToastContainer } from 'react-toastify';
import { MenuItem, Select } from '@mui/material';

export default function StaffUsers() {
  const [open, setOpen] = useState(false);
  const [ searchData,setSearchData] = useState("")
  const pageOptions=[5,10,20,30,40,50,60,70,80,90,100];
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit,setLimit]=useState(10)

  const [addNewStaff, setAddNewStaff] = useState({
    "id":"",
    "title": "Dr",
    "firstname": "",
    "lastname": "",
    "email": "",
    "number": "",
    "practicename":"",
    "practiceaddress": "",
    "password": "",
    "profile_pic" : ""
})
useEffect(()=>{
  if(!open){
    setAddNewStaff({
      "title": "Dr",
      "firstname": "",
      "lastname": "",
      "email": "",
      "number": "",
      "practiceaddress": "",
      "password": "",
      "profile_pic":""
      
      })
  }
},[open])

const handleChangePaginationCount = (value) => {
  setRecordsPerPage(value)
  setCurrentPage(1)
}



const handleDataChange =(pageCount) => {
  setLimit(pageCount)    
};



  return (
    <>
      <React.Fragment>
      <ToastContainer />

        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header setOpen={setOpen} setAddNewStaff={setAddNewStaff} setSearchData={setSearchData} searchData={searchData}/>
            <div className='right-block-data'>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={recordsPerPage}
                    label="PerPage"
                    onChange={(e) => handleChangePaginationCount(e.target.value)} defaultValue={recordsPerPage}
                    className="per-page-select"
                  >
              
                    {pageOptions.map((pageNumber,I)=>  <MenuItem key={I} onClick={() => handleDataChange(pageNumber)} value={pageNumber}>{pageNumber} per page</MenuItem> )}

                  </Select>
              </div>
            <StaffUsersTable setOpen={setOpen} open={open} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage} addNewStaff={addNewStaff} setAddNewStaff={setAddNewStaff} searchData={searchData} setSearchData={setSearchData}/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
