import React from 'react'
import LinkDevices from '../components/Patient/LinkDevices/LinkDevices'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function LinkDeviceInner() {
  
  return (
    <>
    <div className='content-wrapper'>
    <Sidebar/>
        <div className='aside'>
          <Header />
          <LinkDevices/>
        </div>
    </div>
    </>
  )
}
