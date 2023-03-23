import React from 'react'

export default function PatientProfileOverlay() {
  return (
    <>
      <div className='patient-profile'>
        <div className='dialog-title'>
          <h2>Profile</h2>
        </div>
        <div className='profile-info-wrapper'>
          <div className='profile-info-item'>
            <span className="label">First name :&nbsp;</span>
            <span className="text">Michael</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Last name :&nbsp;</span>
            <span className="text">Randerson</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Date of birth :&nbsp;</span>
            <span className="text">14/05/1076</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Sex :&nbsp;</span>
            <span className="text">Male</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Height (cm) :&nbsp;</span>
            <span className="text">189</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Email address :&nbsp;</span>
            <span className="text">michael@thefamousgroup.com.au</span>
          </div>
          <div className='profile-info-item'>
            <span className="label">Contact number :&nbsp;</span>
            <span className="text">0451514497</span>
          </div>
        </div>
      </div>
    </>
  )
}
