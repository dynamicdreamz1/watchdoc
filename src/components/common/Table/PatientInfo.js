import React from 'react'
import { useLocation } from 'react-router-dom'


export default function PatientInfo({el,value,handleClickOpenRequestPopUp,staticAge,DynamicAge,staticGender}) {
  const location=useLocation()
  return (
    <>
      <div className='patient-name table-data'>
        <div className='icon'>
          <img src='/images/AlertIcon.svg' alt="Alert Icon" />
        </div>
        <div className='info'onClick={()=>el?.status==="Pending" && handleClickOpenRequestPopUp(el)}>
          <span className='name'>{value===0 || value===1 || location.pathname==="/cliniciandetails" ? `${el.name}` :  `${el.first_name && el.last_name ? `${el.first_name} ${el.last_name}` : ''}`    } </span>
          {/* <span className='name'>{name}</span> */}

          <span className='age'>{value===0 || value===1 || location.pathname==="/cliniciandetails" ? staticAge : DynamicAge}, {value===0 || value===1 || location.pathname==="/cliniciandetails"  ? staticGender : el.sex}</span>
        
        </div>
      </div>
    </>
  )
}
