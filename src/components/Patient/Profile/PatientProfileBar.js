import { Button, Dialog} from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom';
import { MetaFormeting,calculateAge} from '../../../Utility/functions';
import CliniciansOverlay from '../../Clinician/Overlays/CliniciansOverlay';
import EmergencyContactOverlay from '../../Clinician/Overlays/EmergencyContactOverlay';
import {PatientProfileOverlay} from '../../Clinician/Overlays/PatientProfileOverlay';
import {PatientProfileOverlayForAdmin} from '../../Clinician/Overlays/PatientProfileOverlayForAdmin'
import PhoneNumber from '../../common/PhoneNumber'
import { ChartResultRange } from '../../../Utility/Skeleton';
import { getCurrentUserData } from '../../../services/UserService';


export default function PatientProfileBar({latestData,fetchData}) {
  const userData=getCurrentUserData();
const navigate=useNavigate();
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
      PopupData:userData?.roles[0]?.name==='Admin' ? <PatientProfileOverlayForAdmin data={latestData} handleClose={handleClose} id={latestData?.user_data?.id} fetchData={fetchData}/>: <PatientProfileOverlay data={latestData} handleClose={handleClose}/>,
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
