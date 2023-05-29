import React from 'react'
import RemindDay from './RemindDay'
import ReminderIcon from './ReminderIcon'
import ReminderOptions from './ReminderOptions'
import ReminderTime from './ReminderTime'
import ReminderTitle from './ReminderTitle'


export default function ReminderCard({reminderData}) {
  return (
    <>
    <div className='reminder-card'>
        <ReminderOptions/>
        <div className='icon-block'>
            <ReminderIcon/>
        </div>
        <div className='content-block'>
            <ReminderTitle reminderType={reminderData?.reminder_type}/>
            <RemindDay reminderDay={reminderData?.day}/>
            <ReminderTime reminderTime={reminderData?.time}/>
        </div>
    </div>
    </>
  )
}
