import React from 'react'
import CliniciansTableTabs from '../components/Clinician/CliniciansTableTabs';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';

const Clinicians = () => {
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <CliniciansTableTabs/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Clinicians;
