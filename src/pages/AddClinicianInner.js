import React,{useState} from 'react'
import Sidebar from '../components/Templates/Sidebar'
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';
import MyClinicians from '../components/Patient/AddClinician/MyClinicians';
import PractitionersCard from '../components/Patient/AddClinician/PractitionersCard';


export default function AddClinicianInner() {
  
  const [status,setStatus]=useState(false)
  const [toggle,setToggle]=useState(false)


  const clinicianData=[];

  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header toggle={toggle} setToggle={setToggle}/>

           {toggle===true ?   <AddClinician status={status} setStatus={setStatus}/>  : "" }
           
      <PractitionersCard clinicianData={clinicianData} status={status} setStatus={setStatus} />
          <div className='space-40'></div>
          
          <MyClinicians  status={status}   />
        </div>
    </div>
    </>
  )
}
