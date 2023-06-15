import { Button, Dialog} from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MetaFormeting,calculateAge} from '../../../Utility/functions';
import CliniciansOverlay from '../../Clinician/Overlays/CliniciansOverlay';
import EmergencyContactOverlay from '../../Clinician/Overlays/EmergencyContactOverlay';
import {PatientProfileOverlay} from '../../Clinician/Overlays/PatientProfileOverlay';
import PhoneNumber from '../../common/PhoneNumber'
import { ChartResultRange } from '../../../Utility/Skeleton';


export default function PatientProfileBar({latestData}) {
const navigate=useNavigate();
 const location=useLocation()
  const {first_name,last_name,sex,dob}=MetaFormeting(latestData?.user_data)
  const age=calculateAge(dob)
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openClincians, setOpenClincians] = React.useState(false);
  const [openEmergencyContacts, setOpenEmergencyContacts] = React.useState(false);

  const handleClose = () => {
    setOpenProfile(false);
    setOpenClincians(false);
    setOpenEmergencyContacts(false);
  };
  const handleClickClinician=()=>{
    navigate(`/alluserclinician`, {
      state: {
        userId:latestData?.user_data?.id
      },
    });
  }

  const patientQuickNavs = [
    {
      key: 1,
      Name: 'Profile',
      PopupData: <PatientProfileOverlay data={latestData} handleClose={handleClose}/>,
      handle: setOpenProfile,
      open: openProfile
    },
    {
      key: 2,
      Name: 'Clincians',
      PopupData: <CliniciansOverlay />,
      handle: setOpenClincians,
      open: openClincians
    },
    {
      key: 3,
      Name: 'Emergency Contacts',
      PopupData: <EmergencyContactOverlay data={latestData}/>,
      handle: setOpenEmergencyContacts,
      open: openEmergencyContacts
    }
  ] 

  return (
    <>    
    <div className='patient-profile-bar'>
        <div className='left-block'>
        {latestData?.user_data ?   
            <div className='patient-info'>
                <span className="fname">{first_name},{last_name}</span>
                <span className="age">{age} Years, {sex}</span>
            </div>
            :
      <ChartResultRange />
        }
        </div>
        <div className='center-block'>
            <PhoneNumber Number={latestData?.user_data?.contact_number} />
        </div>
        <div className='right-block'>
            {patientQuickNavs.map((data, i) => (
              <React.Fragment key={i}>
              <Button variant="contained" onClick={data?.Name==='Clincians'?handleClickClinician:data.handle}>{data.Name}</Button>
              <Dialog
                open={!!data.open}
                onClose={handleClose}>
                <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
                {data.PopupData}
              </Dialog>
              </React.Fragment>
            ))}
        </div>
    </div>
    </>
  )
}
