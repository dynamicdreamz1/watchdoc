import { Button, Dialog } from '@mui/material'
import React from 'react'
import PhoneNumber from '../common/PhoneNumber'
import UserProfile from '../common/UserProfile'
import ClinicianDetailEditProfile from './ClinicianDetailEditProfile';
import ClinicianRequest from '../Admin/ClinicianRequest'

export default function ClinicianProfileBar({profileBarData,setAllClinician}) {

  const [open, setOpen] = React.useState(false);
  const [openRequest, setOpenRequest] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenRequest(false)
  };
  const handleClickOpenRequestPopUp=()=>{
    setOpenRequest(true)
  }

  return (
    <>
        <div className='clinician-profile-tab'>
            <div className='left-block'>
                <UserProfile data={profileBarData} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp}/>
                <Dialog
                  open={openRequest}
                  onClose={handleClose}
                  aria-labelledby="clinician-profile-dialog"
                  aria-describedby="clinician-profile-dialog"
                  className='clinician-request-dialog'
                >
                  <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
                  <ClinicianRequest profileBarData={profileBarData} setOpen={setOpen}/>
                </Dialog>
            </div>
            <div className='right-block d-flex align-items-center'>
                <PhoneNumber number={profileBarData?.contact_number}/>
                <Button onClick={handleClickOpen}>Profile</Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="clinician-profile-dialog"
                  aria-describedby="clinician-profile-dialog"
                  className='clinician-profile-dialog'
                >
                  <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
                  <ClinicianDetailEditProfile profileBarData={profileBarData} setOpen={setOpen} />
                </Dialog>
            </div>
        </div>
    </>
  )
}
