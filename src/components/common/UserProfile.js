import { Avatar } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaFormeting } from '../../Utility/functions';

export default function UserProfile({ profileBarData,clinicianStaff,handleClickOpenRequestPopUp,data }) {
  const navigate=useNavigate();
  const location=useLocation();
  let finalData;
 location.pathname==='/editclinician'?
 finalData = MetaFormeting(data):finalData = MetaFormeting(profileBarData);
 const  {first_name,last_name,profile_pic,address} = finalData;


  const handleClickNavigate=()=>{
    if(location?.pathname==="/staffusers"){
      navigate("");
    }
    if(location?.pathname==="/clinicians")
    navigate(`/cliniciandetails`, {
      state: {
        clinicianData: profileBarData,
        allClinician:clinicianStaff
      },
    });
    if(location.pathname==="/cliniciandetails" || location?.pathname==="/dashboard"){
    handleClickOpenRequestPopUp(profileBarData)

    }

  }

  return (
    <>
      <div className='user-profile'>
          {
            <>
              <div className='user-avtar' onClick={handleClickNavigate}>
                <Avatar className='user-profile-avtar' alt={`${first_name} ${last_name} avtar`} src={profile_pic} />
              </div>
              <div className='user-info' onClick={handleClickNavigate}>
                <span className="fname">{first_name} {last_name}</span>
                <span className="position">{address}</span>
              </div>
            </>
          }
      </div>
    </>
  )
}
