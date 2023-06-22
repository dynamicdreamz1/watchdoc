import React, { useState,useEffect } from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'
import { ToastContainer } from 'react-toastify';

export default function StaffUsers() {
  const [open, setOpen] = useState(false);
  const [ searchData,setSearchData] = useState("")
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
      })
  }

},[open])
console.log("11111111-searchData",searchData)
  return (
    <>
      <React.Fragment>
      <ToastContainer />

        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header setOpen={setOpen} setAddNewStaff={setAddNewStaff} setSearchData={setSearchData} searchData={searchData}/>
            <StaffUsersTable setOpen={setOpen} open={open}  addNewStaff={addNewStaff} setAddNewStaff={setAddNewStaff} searchData={searchData} setSearchData={setSearchData}/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
