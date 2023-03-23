import React from 'react'

export default function PatientInfo(props) {
  return (
    <>
    <div className='patient-name table-data'>
        <div className='icon'>
            <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
            <span className='name'>{props?.el?.name}</span>
            <span className='age'>{props?.el?.age}, {props?.el?.gender}</span>
        </div>
    </div>
    </>
  )
}
