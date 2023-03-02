import { Avatar } from '@mui/material'
import React from 'react'
import { MetaFormeting } from '../../Utility/functions';

export default function UserProfile({ data }) {
  
  const  {image,full_name,address} = MetaFormeting(data);
  return (
    <>
      <div className='user-profile'>
          {
            <>
              <div className='user-avtar'>
                <Avatar className='user-profile-avtar' alt={`${full_name} avtar`} src={image} />
              </div>
              <div className='user-info'>
                <span class="fname">{full_name}</span>
                <span class="position">{address}</span>
              </div>
            </>
          }
      </div>
    </>
  )
}
