import React from 'react'
import { EditProfile } from '../components/Patient/Profile/EditProfile'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function EditProfileInner() {
  
  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <EditProfile/>
        </div>
    </div>
    </>
  )
}
