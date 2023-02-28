import { Avatar } from '@mui/material'
import React from 'react'

export default function UserProfile({data}) {
  return (
    <>
    <div className='user-profile'>
        <div className='user-avtar'>
            <Avatar alt="Avtar" src={data.image} />
        </div>
        <div className='user-info'>
            <span className='fname'>{data?.first_name} {data?.last_name}</span>
            <span className='position'>{data.hospital.map((elementValue,index)=>(
              <React.Fragment key={index}>{elementValue}</React.Fragment>
            ))},{data.address}
            </span>
        </div>
    </div>
    </>
  )
}
