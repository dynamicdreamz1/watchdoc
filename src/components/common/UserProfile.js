import { Avatar } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaFormeting } from '../../Utility/functions';

export default function UserProfile({ data,clinicianStaff,handleClickOpenRequestPopUp }) {
 
  const navigate=useNavigate();
  const location=useLocation();
  const  {first_name,last_name} = MetaFormeting(data);
  
  // const navigatePath=location?.pathname==="/staff-users"?'':location?.pathname==="/clinicians"?"/location?.pathname==="/clinicians"":""
  const handleClickNavigate=()=>{
    if(location?.pathname==="/staff-users"){
      navigate("");
    }
    if(location?.pathname==="/clinicians")
    navigate(`/cliniciandetails`, {
      state: {
        clinicianData: data,
        allData:clinicianStaff
      },
    });
    if(location.pathname==="/cliniciandetails"){
    handleClickOpenRequestPopUp()

    }

  }
  return (
    <>
      <div className='user-profile'>
          {
            <>
              <div className='user-avtar' onClick={handleClickNavigate}>
                <Avatar className='user-profile-avtar' alt={`${first_name} ${last_name} avtar`} src='' />
              </div>
              <div className='user-info' onClick={handleClickNavigate}>
                <span className="fname">{first_name} {last_name}</span>
                {/* <span className="position">{address}</span> */}
              </div>
            </>
          }
      </div>
    </>
  )
}
