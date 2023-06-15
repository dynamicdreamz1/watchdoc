import React from 'react'

export default function ReminderTitle({reminderType}) {
const reminder = reminderType === "blood_pressure" ? "blood pressure" : reminderType
  return (
    <>
    <div className='r-title'>
        <h4>{reminder.toUpperCase()}</h4>
    </div>
    </>
  )
}
