import React from 'react'

export default function PatientInfo() {
  return (
    <>
    <div className='patient-name table-data'>
        <div className='icon'>
            <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
            <span className='name'>Randerson, Michael</span>
            <span className='age'>46 Years, Male</span>
        </div>
    </div>
    </>
  )
}
