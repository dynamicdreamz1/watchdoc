import React,{useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import ReminderCard from './ReminderCard'
import WeightYourselfReminderOverlay from '../../Clinician/Overlays/WeightYourselfReminderOverlay';
import { Dialog } from '@mui/material';
import HighHeartrateOverlay from '../../Clinician/Overlays/HighHeartrateOverlay';
import { ToastContainer} from 'react-toastify';


export default function Reminders({latestData,fetchData}) {
  const {t}=useTranslation()
  const [open,setOpen]=useState(false)
  const [openReminder,setOpenReminder]=useState(false)
  const [reminderType,setreminderType]=useState('')
  const [filterDay,setFilterDay]=useState([])
  
  const handleClose = () => {
    setOpen(false);
    setOpenReminder(false)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    const result=latestData?.reminder?.filter(el=>el?.reminder_type===reminderType)?.map((elem)=>elem?.day)?.flat()?.map((el=>parseInt(el,10)))
    setFilterDay(result)
  },[openReminder,reminderType])


  const actionReminderDay={
    setOpenReminder,
    fetchData,
    filterDay,
    reminderType,
    latestData,
    setOpen,
  }

  const actionReminderTypeOption={
    setOpenReminder,
    setreminderType,
    latestData
  }
 
  return (
     
    <div  className='reminder-cards-wrapper mt-22'>
    <ToastContainer />
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
          {openReminder=== true ?
           <WeightYourselfReminderOverlay actionReminderDay={actionReminderDay}/>
           : <HighHeartrateOverlay  actionReminderTypeOption={actionReminderTypeOption}/>}
        </Dialog>
        <div className='wrapper d-flex flex-wrap'>
        {latestData?.reminder?.map((data, I) => (
            <ReminderCard  reminderData={data} key={I} latestData={latestData} fetchData={fetchData}/> 
        ))}
        </div>
    </div>
  )
}
