import React,{useState} from 'react'
import Sidebar from '../components/Templates/Sidebar'

import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';

import CliniciansRequestsTable from '../components/Clinician/CliniciansRequestsTable';
import { TableSkeleton } from '../Utility/Skeleton';

export default function AddClinicianInner() {

  const [show,setShow]=useState(false)
  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <TableSkeleton/>
          <CliniciansRequestsTable/>
          <div className='space-40'></div>
          <button type='button' onClick={()=>setShow(true)}>Add</button>
          {
            show?<AddClinician/>: null
          }
        </div>
    </div>
    </>
  )
}
