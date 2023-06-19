import React, { useState } from 'react'
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import AdminCriticalPatientsAlertTableTabs from '../components/Clinician/Tables/AdminCriticalPatientsAlertTableTabs';
import { useEffect } from 'react';
import { getAllAdminPatient } from '../services/AdminService';

const AdminPatients = () => {

  const [adminAllPatientsData,setAdminAllPatientsData]=useState([])
  const [adminPatientCurrentPage, setAdminPatientCurrentPage] = useState(1);
  const [adminPatientTotalPages, setAdminPatientTotalPages] = useState(0);
  const [AdminPatientdataLimit,setAdminPatientdataLimit] = useState(10)
  const [adminPatientloading, setAdminPatientloading] = useState(false)

const fetchAllPatient=async(adminPatientCurrentPage,AdminPatientdataLimit)=>{
  setAdminPatientloading(true);
  const res= await getAllAdminPatient(adminPatientCurrentPage,AdminPatientdataLimit);
  setAdminPatientTotalPages(Math.ceil(res?.data?.total / AdminPatientdataLimit))
  if(res?.status===200){
    setAdminAllPatientsData(res?.data)
  }
  setAdminPatientloading(false)
}
useEffect(()=>{
  fetchAllPatient(adminPatientCurrentPage,AdminPatientdataLimit)
},[adminPatientCurrentPage,AdminPatientdataLimit])




const handleChangeAdminPagination = (event, newPage) => {
  setAdminPatientCurrentPage(newPage);
};


  

const action={
  adminAllPatientsData,
  adminPatientCurrentPage,
  AdminPatientdataLimit,
  adminPatientTotalPages,
  fetchAllPatient,
  adminPatientloading,
  handleChangeAdminPagination,
  setAdminPatientCurrentPage,
  setAdminPatientdataLimit
}


  return (
    <React.Fragment>
        <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <AdminCriticalPatientsAlertTableTabs action={action}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default AdminPatients;
