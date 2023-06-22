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
  const [searchData, setSearchData] = useState();


const fetchAllPatient=async(adminPatientCurrentPage,AdminPatientdataLimit,searchData)=>{
  setAdminPatientloading(true);
  const res= await getAllAdminPatient(searchData?1:adminPatientCurrentPage,AdminPatientdataLimit,searchData?searchData:'');
  setAdminPatientTotalPages(Math.ceil(res?.data?.data.total / AdminPatientdataLimit))
  if(res?.status===200){
    setAdminAllPatientsData(res?.data.data)
  }
  setAdminPatientloading(false)
}
useEffect(()=>{
  fetchAllPatient(adminPatientCurrentPage,AdminPatientdataLimit,searchData)
},[adminPatientCurrentPage,AdminPatientdataLimit,searchData])


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
  setAdminPatientdataLimit,
  searchData,
  setSearchData
}


  return (
    <React.Fragment>
        <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header setSearchData={setSearchData} searchData={searchData}/>
          <AdminCriticalPatientsAlertTableTabs action={action}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default AdminPatients;
