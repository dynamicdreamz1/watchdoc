import React from 'react'

export default function AlertCard() {
  return (
    <>
    <div className='alert-card'>
        <div className='text-block'>
            <span className='icon'></span>
            <span className='title'></span>
            <span className='time'></span>
        </div>
        <div className='button-block'>
            <Button variant="contained">Mark as Reviewed</Button>
        </div>
    </div>
    </>
  )
}
