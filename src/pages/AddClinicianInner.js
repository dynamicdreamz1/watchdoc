import React,{useState} from 'react'
import Sidebar from '../components/Templates/Sidebar'
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';
import MyClinicians from '../components/Patient/AddClinician/MyClinicians';

export default function AddClinicianInner() {
  
  const [status,setStatus]=useState(false)
  const [toggle,setToggle]=useState(false)

  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header toggle={toggle} setToggle={setToggle}/>

           {toggle===true ?   <AddClinician status={status} setStatus={setStatus}/> : "" }
      
          {/* <Tab  leSkeleton/> */}
          {/* <CliniciansRequestsTable/> */}
          <div className='space-40'></div>
          {/* <CliniciansRequestsTable/> */}
          <MyClinicians />
        </div>
    </div>
    </>
  )
}
