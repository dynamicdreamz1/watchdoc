import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import ReminderCard from './ReminderCard'
import WeightYourselfReminderOverlay from '../../Clinician/Overlays/WeightYourselfReminderOverlay';
import { Dialog } from '@mui/material';

export default function Reminders() {
  const [open,setOpen]=useState(false)
  const {t}=useTranslation()
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
     
    <div className='reminder-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5 className='d-flex align-items-center'>{t('PatientDashboard.Reminders.title')} <button type="button"  onClick={handleClickOpen}><img src="/images/Add-Button-White.svg" alt="button" /></button></h5>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className='reminder-overlay'
        >
          <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
          <WeightYourselfReminderOverlay />
        </Dialog>
        <div className='wrapper d-flex flex-wrap'>
            <ReminderCard/> 
            <ReminderCard/>
            <ReminderCard/>
        </div>
    </div>
  )
}
