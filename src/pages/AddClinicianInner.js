import React from 'react'
import Sidebar from '../components/Templates/Sidebar'
import Aside from '../components/Templates/Aside';
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';
import CliniciansTableTabs from '../components/Clinician/CliniciansTableTabs';
import CliniciansRequestsTable from '../components/Clinician/CliniciansRequestsTable';

export default function AddClinicianInner() {
  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <CliniciansRequestsTable/>
          <div className='space-40'></div>
          <AddClinician/>
        </div>
    </div>
    </>
  )
}
