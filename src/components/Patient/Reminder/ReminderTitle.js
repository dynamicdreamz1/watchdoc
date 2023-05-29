import React from 'react'

export default function ReminderTitle({reminderType}) {
  return (
    <>
    <div className='r-title'>
        <h4>{reminderType.toUpperCase()}</h4>
    </div>
    </>
  )
}
