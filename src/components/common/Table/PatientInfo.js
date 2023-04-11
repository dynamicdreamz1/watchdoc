import React from 'react'


export default function PatientInfo({first_name,last_name,sex,age}) {

  return (
    <>
      <div className='patient-name table-data'>
        <div className='icon'>
          <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
          <span className='name'>{first_name} {last_name}</span>
          <span className='age'>{age}, {sex}</span>
        </div>
      </div>
    </>
  )
}
