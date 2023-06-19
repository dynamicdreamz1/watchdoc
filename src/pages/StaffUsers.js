import React, { useState,useEffect } from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function StaffUsers() {
  const [open, setOpen] = useState(false);
  const [ searchData,setSearchData] = useState()
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

  return (
    <>
      <React.Fragment>
        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header setOpen={setOpen} setAddNewStaff={setAddNewStaff} setSearchData={setSearchData}/>
            <StaffUsersTable setOpen={setOpen} open={open}  addNewStaff={addNewStaff} setAddNewStaff={setAddNewStaff}/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
