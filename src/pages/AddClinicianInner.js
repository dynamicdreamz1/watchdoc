import React,{useState} from 'react'
import Sidebar from '../components/Templates/Sidebar'

import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';

import CliniciansRequestsTable from '../components/Clinician/CliniciansRequestsTable';
import MyClinicians from '../components/Patient/AddClinician/MyClinicians';
import { Add } from '@mui/icons-material';

export default function AddClinicianInner() {

  const [status,setStatus]=useState(false)
  
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
