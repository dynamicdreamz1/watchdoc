import React, { useState } from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function StaffUsers() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <React.Fragment>
        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header setOpen={setOpen}/>
            <StaffUsersTable setOpen={setOpen} open={open}/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
