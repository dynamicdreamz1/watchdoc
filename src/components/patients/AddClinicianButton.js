import React from 'react'
import AddIcon from './AddIcon'

export default function AddClinicianButton() {
  return (
    <>
    <div className='add-clinician-button-block'>
      <div className='title'>
        <h4>Your Clinician Connections</h4>
      </div>
      <button type='button' className='d-flex align-items-center justify-content-between add-clinician-button'>
          <span className='text'>
          Add Your First Clinician
          </span>
          <span className='icon'>
              <AddIcon/>
          </span>
      </button>
    </div>
    </>
  )
}
