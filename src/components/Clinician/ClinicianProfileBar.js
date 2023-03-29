import { Button } from '@mui/material'
import React from 'react'
import PhoneNumber from '../common/PhoneNumber'
import UserProfile from '../common/UserProfile'

export default function ClinicianProfileBar() {
  return (
    <>
        <div className='clinician-profile-tab'>
            <div className='left-block'>
                <UserProfile/>
            </div>
            <div className='right-block d-flex align-items-center'>
                <PhoneNumber/>
                <Button>Profile</Button>
            </div>
        </div>
    </>
  )
}
