import { Button } from '@mui/material'
import React from 'react'
import PhoneNumber from '../common/PhoneNumber'

export default function PatientProfileBar() {
  return (
    <>
    <div className='patient-profile-bar'>
        <div className='left-block'>
            <div className='patient-info'>
                <span className="fname">Dr Sarah McDonnell</span>
                <span className="age">46 Years, Male</span>
            </div>
        </div>
        <div className='center-block'>
            <PhoneNumber/>
        </div>
        <div className='right-block'>
            <Button variant="contained">Profile</Button>
            <Button variant="contained">Clincians</Button>
            <Button variant="contained">Emergency Contacts</Button>
        </div>
    </div>
    </>
  )
}
