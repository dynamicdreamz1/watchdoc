import { Avatar } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaFormeting } from '../../Utility/functions';

export default function UserProfile({ data }) {
  const navigate=useNavigate();
  const location=useLocation();
  const  {image,full_name,address} = MetaFormeting(data);
  const navigatePath=location?.pathname==="/staff-users"?'':location?.pathname==="/clinicians"?"/cliniciandetails":""
  return (
    <>
      <div className='user-profile'>
          {
            <>
              <div className='user-avtar' onClick={()=>navigate(navigatePath)}>
                <Avatar className='user-profile-avtar' alt={`${full_name} avtar`} src={image} />
              </div>
              <div className='user-info' onClick={()=>navigate(navigatePath)}>
                <span className="fname">{full_name}</span>
                <span className="position">{address}</span>
              </div>
            </>
          }
      </div>
    </>
  )
}
