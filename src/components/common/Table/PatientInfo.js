import React from 'react'


export default function PatientInfo({last_name,sex,DynamicAge,first_name,name,value,staticAge,staticGender}) {
 
  return (
    <>
      <div className='patient-name table-data'>
        <div className='icon'>
          <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
          <span className='name'>{value===0 || value===1 ? `${name}` :  `${first_name && last_name ? `${first_name} ${last_name}` : ''}`    } </span>
          {/* <span className='name'>{name}</span> */}

          <span className='age'>{value===0 || value===1 ? staticAge : DynamicAge}, {value===0 || value===1 ? staticGender : sex}</span>
        
        </div>
      </div>
    </>
  )
}
