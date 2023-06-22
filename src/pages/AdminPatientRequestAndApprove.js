import React, {useState} from 'react'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import {  requestAndApprovePatient } from '../Utility/functions'
import { Pagination } from '@mui/material'
import { TableSkeleton } from '../Utility/Skeleton'


const AdminPatientRequestAnd = ({action,value}) => {
const {adminAllPatientsData,adminPatientCurrentPage,adminPatientloading,handleChangeAdminPagination,adminPatientTotalPages ,
  fetchAllPatient,searchData,setSearchData}=action;
const [viewAll] = useState(true)
const AllPatientData = requestAndApprovePatient(adminAllPatientsData?.data)


    const handleClickReview = async (id,status) => {
    }  
    
    const adminGetAllPatientData = () =>{
      fetchAllPatient(adminPatientCurrentPage,adminPatientTotalPages,searchData ? searchData :'')
    }

  return (
    <React.Fragment>
        <div className=''>
         <div>
         </div>
         {adminPatientloading ? <TableSkeleton /> :
           <CriticalPatients value={value} patientData={AllPatientData} handleClickStatus={handleClickReview} viewAll={viewAll} adminGetAllPatient={adminGetAllPatientData} setSearchData={setSearchData}/>
}
          <Pagination page={adminPatientCurrentPage} onChange={handleChangeAdminPagination} count={adminPatientTotalPages} variant="outlined" shape="rounded" className='table-pagination' />


        </div>
    </React.Fragment>
  )
}

export default AdminPatientRequestAnd