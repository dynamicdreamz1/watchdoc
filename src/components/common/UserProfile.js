import { Avatar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MetaFormeting } from '../../Utility/functions';

export default function UserProfile({ data }) {
  const navigate=useNavigate();
  
  const  {image,full_name,address} = MetaFormeting(data);
  return (
    <>
      <div className='user-profile'>
          {
            <>
              <div className='user-avtar' onClick={()=>navigate('/cliniciandetails')}>
                <Avatar className='user-profile-avtar' alt={`${full_name} avtar`} src={image} />
              </div>
              <div className='user-info'>
                <span className="fname">{full_name}</span>
                <span className="position">{address}</span>
              </div>
            </>
          }
      </div>
    </>
  )
}
