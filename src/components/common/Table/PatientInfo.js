import React from 'react'
import { MetaFormeting } from '../../../Utility/functions';

export default function PatientInfo(props) {
  // log
  const {first_name,last_name,sex}=MetaFormeting(props?.el)
  
  return (
    <>
    <div className='patient-name table-data'>
        <div className='icon'>
            <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'>
            <span className='name'>{first_name} {last_name}</span>
            <span className='age'>{props?.el?.age}, {sex}</span>
        </div>
    </div>
    </>
  )
}
