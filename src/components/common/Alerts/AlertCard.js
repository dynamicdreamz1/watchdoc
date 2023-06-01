import { Button } from '@mui/material'
import React from 'react'
import { GetdayHourMin } from '../../../Utility/functions';

export default function AlertCard({alertData }) {
  const time = GetdayHourMin(alertData.alert_date)
  return (
    <>
    <div className='alert-card d-flex'>
        <div className='text-block d-flex align-items-center'>
            <span className='icon'></span>
            <span className='title'>{alertData?.alert_message} {alertData.alert_limit}</span>
            <span className='time'>{time.data} {time.lable} Ago</span>
        </div>
        <div className='button-block'>
            <Button variant="contained">Mark as Reviewed</Button>
        </div>
    </div>
    </>
  )
}
