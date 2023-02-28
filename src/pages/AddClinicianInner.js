import React,{useState} from 'react'
import Sidebar from '../components/Templates/Sidebar'

import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';

import CliniciansRequestsTable from '../components/Clinician/CliniciansRequestsTable';

export default function AddClinicianInner() {
  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <AddClinician status={status} setStatus={setStatus}/>
          <div className='space-40'></div>
          <AddClinician/>
        </div>
    </div>
    </>
  )
}
