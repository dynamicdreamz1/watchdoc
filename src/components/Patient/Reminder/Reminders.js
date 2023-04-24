import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import ReminderCard from './ReminderCard'
import WeightYourselfReminderOverlay from '../../Clinician/Overlays/WeightYourselfReminderOverlay';

export default function Reminders() {
  const [open,setOpen]=useState(false)
  const {t}=useTranslation()
  const handleClickOpenPopUp=()=>{
    setOpen(!open)

  } 
  return (
     
    <div className='reminder-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5 className='d-flex align-items-center'>{t('PatientDashboard.Reminders.title')} <button type="button" onClick={handleClickOpenPopUp}><img src="/images/Add-Button-White.svg" alt="button" /></button></h5>
        </div>
        {open &&
          <WeightYourselfReminderOverlay />
        }
        <div className='wrapper d-flex flex-wrap'>
            <ReminderCard/>
            <ReminderCard/>
            <ReminderCard/>
        </div>
    </div>
  )
}
