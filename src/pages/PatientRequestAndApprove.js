import React, {useState} from 'react'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import {  requestAndApprovePatient } from '../Utility/functions'
import { ClinicianPatientStatus } from '../services/ClinicianService'
import { Pagination } from '@mui/material'
import { TableSkeleton } from '../Utility/Skeleton'


const PatientRequestAnd = ({action}) => {


const {PatientRequestData,PatientApproveData,getPendingPatient,dataLimitApprovePatient, currentPageApprovePatient,
   getApproveRequest, loadingApprovePatient,loadingPendingPatient,dataLimitPendingPatient, currentPagePendingPatient}=action

  const [viewAll] = useState(true)
  const PatientApprove = requestAndApprovePatient(PatientApproveData?.patients?.data)
  const PatientRequest = requestAndApprovePatient(PatientRequestData?.pending_request?.data)
    const handleClickReview = async (id,status) => {
      const finalData={
        id:id,
        approval:status==='Reviewed'?"reject":status==='Approve'?'approve':'reject'
      }
      const result= await ClinicianPatientStatus(finalData)
      if(result.status===200){       
        getPendingPatient(dataLimitPendingPatient, currentPagePendingPatient)
        getApproveRequest(dataLimitApprovePatient, currentPageApprovePatient)
      }
    }   
  return (
    <React.Fragment>
        <div className=''>
         <div>
         </div>
         {loadingApprovePatient ? <TableSkeleton /> :
          <CriticalPatients patientData={PatientApprove} handleClickStatus={handleClickReview} viewAll={viewAll} />
  }
          <Pagination page={action?.currentPageApprovePatient} onChange={action?.handleChangePageApprovePatient} count={action?.totalPagesApprovePatient} variant="outlined" shape="rounded" className='table-pagination' />

          <div className="pp-table">
            <div className='table-title'>
              <h4>Patients Pending</h4>
            </div>
            {loadingPendingPatient ? <TableSkeleton /> :
            <CriticalPatients patientData={PatientRequest} handleClickStatus={handleClickReview} viewAll={viewAll} />
}
            <Pagination page={action?.currentPagePendingPatient} onChange={action?.handleChangePagePendingPatient} count={action?.totalPagesPendingPatient} variant="outlined" shape="rounded" className='table-pagination' />

          </div>
        </div>
    </React.Fragment>
  )
}

export default PatientRequestAnd