import React from 'react'
import LinkDevices from '../components/Patient/LinkDevices/LinkDevices'

export default function LinkDeviceOuter() {
  return (
    <>
        <div className='page-wrapper bg-gray'>
            <div className='container'>
              <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
              </div>
              <div className='page-content-wrapper'>
                <LinkDevices/>
              </div>
            </div>
        </div>
    </>
  )
}
