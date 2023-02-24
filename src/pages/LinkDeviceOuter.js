import React from 'react'
import LinkDevice from '../components/Patient/LinkDevice'

export default function LinkDeviceOuter() {
  return (
    <>
        <div className='page-wrapper bg-gray'>
            <div className='container'>
              <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
              </div>
              <div className='page-content-wrapper'>
                <LinkDevice/>
              </div>
            </div>
        </div>
    </>
  )
}
