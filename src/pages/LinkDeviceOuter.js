import React from 'react'
import LinkDevices from '../components/Patient/LinkDevices/LinkDevices'

export default function LinkDeviceOuter() {
  
  return (
    <>
        <div className='page-wrapper bg-gray link-device'>
            <div className='container'>
              <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
              </div>
              <div className='page-content-wrapper'>
                <div className="title-block">
                  <h4>Select the product you would like to connect to WatchDoc.</h4>
                </div>
                <LinkDevices/>
              </div>
            </div>
        </div>
    </>
  )
}
