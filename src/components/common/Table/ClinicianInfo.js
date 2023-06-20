import React,{useState} from 'react'
import UserProfile from '../UserProfile'
import { Dialog } from '@mui/material';
import ClinicianRequest from '../../Admin/ClinicianRequest';

export default function ClinicianInfo({data,clinicianStaff}) {
  const [profileBarData,setProfileBarData]=useState([])
  const [open, setOpen] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenRequest(false)
  };
  
  const handleClickOpenRequestPopUp=(data)=>{
    setProfileBarData(data)
    setOpenRequest(true)
  }
  return (
    <>
        <div className='name'>
            <UserProfile data={data} clinicianStaff={clinicianStaff} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp} open={open}/>
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
    </>
  )
}
