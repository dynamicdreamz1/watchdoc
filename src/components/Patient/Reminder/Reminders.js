import React from 'react'
import { useTranslation } from 'react-i18next'
import ReminderCard from './ReminderCard'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export default function Reminders() {
  const {t}=useTranslation()
  const handleClickOpenPopUp=()=>{
  }
  return (
     
    <div className='reminder-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.Reminders.title')} </h5>
            <div onClick={handleClickOpenPopUp}><AddCircleOutlineRoundedIcon /></div>
        </div>
        <div className='wrapper d-flex flex-wrap'>
            <ReminderCard/>
            <ReminderCard/>
            <ReminderCard/>
        </div>
    </div>
  )
}
