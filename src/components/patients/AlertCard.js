import { Button } from '@mui/material'
import React from 'react'

export default function AlertCard() {
  return (
    <>
    <div className='alert-card d-flex'>
        <div className='text-block d-flex align-items-center'>
            <span className='icon'></span>
            <span className='title'>Heart rate above 100bpm</span>
            <span className='time'>1 hour ago</span>
        </div>
        <div className='button-block'>
            <Button variant="contained">Mark as Reviewed</Button>
        </div>
    </div>
    </>
  )
}
