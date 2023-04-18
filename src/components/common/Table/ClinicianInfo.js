import React,{useState} from 'react'
import UserProfile from '../UserProfile'
import { Dialog } from '@mui/material';
import ClinicianRequest from '../../Admin/ClinicianRequest';
import { MetaFormeting } from '../../../Utility/functions';

export default function ClinicianInfo({data,clinicianStaff}) {
  // const [data,setData]=useState(allClinician)
  const [profileBarData,setProfileBarData]=useState([])
  const [open, setOpen] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

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
            <UserProfile data={data} clinicianStaff={clinicianStaff} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp}/>
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
