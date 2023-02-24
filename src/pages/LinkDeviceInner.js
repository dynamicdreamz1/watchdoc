import React from 'react'
import LinkDevice from '../components/Patient/LinkDevice'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

export default function LinkDeviceInner() {
  return (
    <>
    <div className='content-wrapper'>
    <Sidebar/>
        <div className='aside'>
          <Header />
          <LinkDevice/>
        </div>
    </div>
    </>
  )
}
