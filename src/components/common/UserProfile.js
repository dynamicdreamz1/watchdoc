import { Avatar } from '@mui/material'
import React from 'react'

export default function UserProfile() {
  return (
    <>
    <div className='user-profile'>
        <div className='user-avtar'>
            <Avatar alt="Avtar" src="/images/avtar.png" />
        </div>
        <div className='user-info'>
            <span className='fname'>Dr Sarah McDonnell</span>
            <span className='position'>Neighbourhood Medical, Bardon, QLD</span>
        </div>
    </div>
    </>
  )
}
