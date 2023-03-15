import React from 'react'
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import CriticalPatientsAlertTableTabs from '../components/Clinician/CriticalPatientsAlertTableTabs';

const Patients = () => {
  return (
    <React.Fragment>
        <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <CriticalPatientsAlertTableTabs/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Patients;
