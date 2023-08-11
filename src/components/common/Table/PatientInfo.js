import React from 'react'
import { useLocation } from 'react-router-dom'


export default function PatientInfo({el,handleClickOpenRequestPopUp}) {
  const location=useLocation()
  return (
    <>
      <div className='patient-name table-data'>
        <div className='icon'>
          <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        {/* <div className='info'onClick={()=>el?.status==="Pending" && handleClickOpenRequestPopUp(el)}> */}
        <div className='info'>
          <span className='name'>{ location.pathname==="/cliniciandetails" ? `${el.name}` :  `${el.first_name && el.last_name ? `${el.first_name} ${el.last_name}` : ''}`    } </span>
          <span className='age'>{location.pathname==="/cliniciandetails" ? el.age : el.age}, { location.pathname==="/cliniciandetails"  ? el.gender : el.gender}</span>
        
        </div>
      </div>
    </>
  )
}
