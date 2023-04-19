import React from 'react'
import '../../../css/Dialog.css'
import { MetaFormeting } from '../../../Utility/functions'

export default function EmergencyContactOverlay({data}) {
  const {first_name,last_name}=MetaFormeting(data)
  const {email,contact_number}=(data);
  
  return (
    <>
        <div className='dialog-title'>
            <h2>Emergency Contacts</h2>
        </div>
        <div className='emergency-content'>
            <h5>{first_name ? first_name :data?.first_name} {last_name? last_name : data?.last_name}</h5>
            <span><a href="tel:0433 396 113">{contact_number}</a></span>
            <span><a href="mailto:trish@thefamousgroup.com.au">{email}</a></span>
        </div>  
    </>
  )
}
