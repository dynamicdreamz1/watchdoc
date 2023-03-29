import { Button, Dialog } from '@mui/material'
import React from 'react'
import PhoneNumber from '../common/PhoneNumber'
import UserProfile from '../common/UserProfile'

export default function ClinicianProfileBar({profileBarData}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <div className='clinician-profile-tab'>
            <div className='left-block'>
                <UserProfile data={profileBarData}/>
            </div>
            <div className='right-block d-flex align-items-center'>
                <PhoneNumber number={profileBarData?.contact_number}/>
                <Button onClick={handleClickOpen}>Profile</Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="clinician-profile-dialog"
                  aria-describedby="clinician-profile-dialog"
                >

                </Dialog>
            </div>
        </div>
    </>
  )
}
