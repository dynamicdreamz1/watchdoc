import React, { useState } from 'react'
import Sidebar from '../components/Templates/Sidebar'
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';
import MyClinicians from '../components/Patient/AddClinician/MyClinicians';
import { createContext } from "react";

export const InnerClinicianContext = createContext([]);
export default function AddClinicianInner() {
  const [status, setStatus] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])
  const [nextBtn,setNextBtn]=useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchData, setSearchData] = useState("");

  
  return (
    <>
      <InnerClinicianContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData,nextBtn,setNextBtn,currentPage, setCurrentPage }}>
        <div className='content-wrapper'>
          <Sidebar />
          <div className='aside'>
            <Header toggle={toggle} setToggle={setToggle} setSearchData={setSearchData}/>
            {toggle === true ? 
            <AddClinician status={status} setStatus={setStatus} />
               : ""} 
            
            <MyClinicians status={status} searchData={searchData}/>
          </div>
        </div>
      </InnerClinicianContext.Provider>
    </>
  )
}
