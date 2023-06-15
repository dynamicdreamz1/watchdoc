import React, {useState} from 'react'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import {  requestAndApprovePatient } from '../Utility/functions'
import { Pagination } from '@mui/material'
import { TableSkeleton } from '../Utility/Skeleton'


const AdminPatientRequestAnd = ({action,value}) => {
const {adminAllPatientsData,adminPatientCurrentPage,adminPatientloading,handleChangeAdminPagination,adminPatientTotalPages}=action;
const [viewAll] = useState(true)
const AllPatientData = requestAndApprovePatient(adminAllPatientsData?.data)


    const handleClickReview = async (id,status) => {
      console.log("111-id",id)
    }  
    
  return (
    <React.Fragment>
        <div className=''>
         <div>
         </div>
         {adminPatientloading ? <TableSkeleton /> :
           <CriticalPatients value={value} patientData={AllPatientData} handleClickStatus={handleClickReview} viewAll={viewAll} />
}
          <Pagination page={adminPatientCurrentPage} onChange={handleChangeAdminPagination} count={adminPatientTotalPages} variant="outlined" shape="rounded" className='table-pagination' />


        </div>
    </React.Fragment>
  )
}

export default AdminPatientRequestAnd