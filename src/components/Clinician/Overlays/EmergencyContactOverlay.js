import React from 'react'
import '../../../css/Dialog.css'

export default function EmergencyContactOverlay() {
  return (
    <>
        <div className='dialog-title'>
            <h2>Emergency Contacts</h2>
        </div>
        <div className='emergency-content'>
            <h5>Trish Ketels</h5>
            <span><a href="tel:0433 396 113">0433 396 113</a></span>
            <span><a href="mailto:trish@thefamousgroup.com.au">trish@thefamousgroup.com.au</a></span>
        </div>  
    </>
  )
}
