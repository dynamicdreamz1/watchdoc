import React, { useState } from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function StaffUsers() {
  const [open, setOpen] = useState(false);
  const [ searchData,setSearchData] = useState()
  return (
    <>
      <React.Fragment>
        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header setOpen={setOpen} setSearchData={setSearchData}/>
            <StaffUsersTable setOpen={setOpen} open={open} searchData={searchData}/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
