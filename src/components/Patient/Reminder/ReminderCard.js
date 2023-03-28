import React from 'react'
import RemindDay from './RemindDay'
import ReminderIcon from './ReminderIcon'
import ReminderOptions from './ReminderOptions'
import ReminderTime from './ReminderTime'
import ReminderTitle from './ReminderTitle'


export default function ReminderCard() {
  return (
    <>
    <div className='reminder-card'>
        <ReminderOptions/>
        <div className='icon-block'>
            <ReminderIcon/>
        </div>
        <div className='content-block'>
            <ReminderTitle/>
            <RemindDay/>
            <ReminderTime/>
        </div>
    </div>
    </>
  )
}
