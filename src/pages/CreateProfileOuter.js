import React from 'react'
import CreateProfile from '../components/Patient/Profile/CreateProfile'

export default function CreateProfileOuter() {
  return (
    <>
    <div className='varification-page-wrapper'>
        <div className='container'>
            <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
            </div>
            <div className='page-content-wrapper'>
                <CreateProfile/>
            </div>
        </div>
    </div>
    </>
  )
}
