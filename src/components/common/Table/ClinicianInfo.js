import React from 'react'
import UserProfile from '../UserProfile'

export default function ClinicianInfo({data}) {
  return (
    <>
        <div className='name'>
            <UserProfile data={data}/>
        </div>
    </>
  )
}
