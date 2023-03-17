import React from 'react'
import { useTranslation } from 'react-i18next'
import ReminderCard from './ReminderCard'

export default function Reminders() {
  const {t}=useTranslation()
  return (
     
    <div className='reminder-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5>{t('PatientDashboard.Reminders.title')}</h5>
        </div>
        <div className='wrapper d-flex flex-wrap'>
            <ReminderCard/>
            <ReminderCard/>
            <ReminderCard/>
        </div>
    </div>
  )
}
