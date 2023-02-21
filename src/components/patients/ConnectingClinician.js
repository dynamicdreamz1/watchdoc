import React from 'react'
import AddIcon from './AddIcon'

export default function ConnectingClinician() {
  return (
    <>
    <div className='clinician-connection-wrapper'>
        <div className='title-block d-flex align-items-center justify-content-between'>
            <span className='text'>
                <h4>Clinicians</h4>
            </span>
            <span className='icon'>
                <AddIcon/>
            </span>
        </div>
        <div className='clinician-connection'>
            <div className='text-block'>
                <img src='/images/Clinicians-icon-white.svg' alt='Clinicians Icon White' />
                <h6>Connecting to Clinicians</h6>
                <p>When you share your health data with your clinician they can monitor your health and personalise your health check alert settings. </p>
            </div>
            <div className='image-block'>
                <img src='/images/Lady-with-laptop.svg' alt='Lady with Laptop' />
            </div>
        </div>
    </div>
    </>
  )
}
