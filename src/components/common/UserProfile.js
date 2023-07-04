import { Avatar } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaFormeting } from '../../Utility/functions';
import { getCurrentUserData } from '../../services/UserService';

export default function UserProfile({ profileBarData,clinicianStaff,handleClickOpenRequestPopUp,data }) {
  const userData=getCurrentUserData();
  const navigate=useNavigate();
  const location=useLocation();
  let finalData;
 location.pathname==='/editclinician' || location?.pathname==="/clinicians" || location?.pathname==="/staffusers"  || location?.pathname==="/alluserclinician"  || (location.pathname==='/dashboard' && userData?.roles[0]?.name==='Admin')?
 finalData = MetaFormeting(data):
 finalData = MetaFormeting(profileBarData);

 const  {first_name,last_name,profile_pic,address,practice_address} = finalData;

  const handleClickNavigate=()=>{
    if(location?.pathname==="/staffusers"){
      navigate("");
    }
    if(location?.pathname==="/clinicians")
    navigate(`/cliniciandetails`, {
      state: {
        id:data?.id
      },
    });
    if(location.pathname==="/cliniciandetails"){
    handleClickOpenRequestPopUp(profileBarData,profileBarData)

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
                <span className="position">{address?address:practice_address ? practice_address : ''}</span>
              </div>
            </>
          }
      </div>
    </>
  )
}
