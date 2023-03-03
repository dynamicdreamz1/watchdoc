import React from 'react'
import ReminderCard from './ReminderCard'

export default function Reminders() {
  return (
     
    <div className='reminder-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5>Reminders</h5>
        </div>
        <div className='wrapper d-flex flex-wrap'>
            <ReminderCard/>
            <ReminderCard/>
            <ReminderCard/>
        </div>
    </div>
  )
}
