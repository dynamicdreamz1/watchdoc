import React, { useState } from 'react'
import CliniciansTableTabs from '../components/Clinician/CliniciansTableTabs';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';

const Clinicians = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar />
        <div className='aside'>
          <Header setOpen={setOpen} />
          <CliniciansTableTabs open={open} setOpen={setOpen} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Clinicians;
