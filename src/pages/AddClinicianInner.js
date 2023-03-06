import React, { useState } from 'react'
import Sidebar from '../components/Templates/Sidebar'
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';
import MyClinicians from '../components/Patient/AddClinician/MyClinicians';
import PractitionersCard from '../components/Patient/AddClinician/PractitionersCard';
import { createContext } from "react";

export const UserContext = createContext([]);
export default function AddClinicianInner() {
  const [status, setStatus] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])

  return (
    <>
      <UserContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData }}>
        <div className='content-wrapper'>
          <Sidebar />
          <div className='aside'>
            <Header toggle={toggle} setToggle={setToggle} />
            {toggle === true ? 
            <AddClinician status={status} setStatus={setStatus} />
               : ""} 
            <PractitionersCard  />
            <MyClinicians status={status} />
          </div>
        </div>
      </UserContext.Provider>
    </>
  )
}
