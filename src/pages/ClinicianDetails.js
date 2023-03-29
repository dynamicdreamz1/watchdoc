import React, { useState } from 'react'
import ClinicianProfileBar from '../components/Clinician/ClinicianProfileBar'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'

const ClinicianDetails = () => {

  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header setOpen={setOpen}/>
          <ClinicianProfileBar open={open} setOpen={setOpen}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ClinicianDetails