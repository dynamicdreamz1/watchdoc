import React from 'react'
import { useLocation } from 'react-router-dom'


export default function PatientInfo({full_name,last_name,sex,age,first_name}) {
 
  let location=useLocation()
  return (
    <>
      <div className='patient-name table-data'>
        <div className='icon'>
          <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
          <span className='name'>{location.pathname==="/dashboard" || location.pathname==="/patients" ? `${first_name===undefined ? "" :first_name} ${last_name===undefined ? "" :last_name }` : `${full_name}`}</span>
          <span className='age'>{age}, {sex}</span>
        </div>
      </div>
    </>
  )
}
