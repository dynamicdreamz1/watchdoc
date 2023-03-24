import React from 'react'
import StaffUsersTable from '../components/Admin/StaffUsersTable'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function StaffUsers() {
  return (
    <>
      <React.Fragment>
        <div className='content-wrapper'>
          <Sidebar/>
          <div className='aside'>
            <Header/>
            <StaffUsersTable/>
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
