import { Button } from '@mui/material'
import React from 'react'
import PhoneNumber from '../common/PhoneNumber'
import UserProfile from '../common/UserProfile'

export default function ClinicianProfileBar({profileBarData}) {

  return (
    <>
        <div className='clinician-profile-tab'>
            <div className='left-block'>
                <UserProfile data={profileBarData}/>
            </div>
            <div className='right-block d-flex align-items-center'>
                <PhoneNumber number={profileBarData?.contact_number}/>
                <Button>Profile</Button>
            </div>
        </div>
    </>
  )
}
