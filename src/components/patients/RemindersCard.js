import React from 'react'
import RemindDay from './RemindDay'
import ReminderIcon from './ReminderIcon'
import ReminderTime from './ReminderTime'
import ReminderTitle from './ReminderTitle'

export default function RemindersCard() {
  return (
    <>
    <div className='reminder-card'>
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
