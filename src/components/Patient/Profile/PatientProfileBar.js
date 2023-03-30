import { Button, Dialog} from '@mui/material'
import React from 'react'
import CliniciansOverlay from '../../Clinician/Overlays/CliniciansOverlay';
import EmergencyContactOverlay from '../../Clinician/Overlays/EmergencyContactOverlay';
import PatientProfileOverlay from '../../Clinician/Overlays/PatientProfileOverlay';
import PhoneNumber from '../../common/PhoneNumber'


export default function PatientProfileBar() {

  const [openProfile, setOpenProfile] = React.useState(false);
  const [openClincians, setOpenClincians] = React.useState(false);
  const [openEmergencyContacts, setOpenEmergencyContacts] = React.useState(false);

  const patientQuickNavs = [
    {
      key: 1,
      Name: 'Profile',
      PopupData: <PatientProfileOverlay/>,
      handle: setOpenProfile,
      open: openProfile
    },
    {
      key: 2,
      Name: 'Clincians',
      PopupData: <CliniciansOverlay/>,
      handle: setOpenClincians,
      open: openClincians
    },
    {
      key: 3,
      Name: 'Emergency Contacts',
      PopupData: <EmergencyContactOverlay/>,
      handle: setOpenEmergencyContacts,
      open: openEmergencyContacts
    }
  ] 

  const handleClose = () => {
    setOpenProfile(false);
    setOpenClincians(false);
    setOpenEmergencyContacts(false);
  };
    
  return (
    <>
    <div className='patient-profile-bar'>
        <div className='left-block'>
            <div className='patient-info'>
                <span className="fname">Dr Sarah McDonnell</span>
                <span className="age">46 Years, Male</span>
            </div>
        </div>
        <div className='center-block'>
            <PhoneNumber/>
        </div>
        <div className='right-block'>
            {patientQuickNavs.map((data, i) => (
              <React.Fragment key={i}>
              <Button variant="contained" onClick={data.handle}>{data.Name}</Button>
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
