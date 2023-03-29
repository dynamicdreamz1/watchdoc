import React from 'react'
import UserProfile from '../UserProfile'

export default function ClinicianInfo({data,clinicianStaff}) {
  return (
    <>
        <div className='name'>
            <UserProfile data={data} clinicianStaff={clinicianStaff}/>
        </div>
    </>
  )
}
