import React, {useState} from 'react'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import {  requestAndApprovePatient } from '../Utility/functions'
import { ClinicianPatientStatus } from '../services/ClinicianService'
import { Pagination } from '@mui/material'
import SimpleBackdrop, { TableSkeleton } from '../Utility/Skeleton'
import { toast } from 'react-toastify'


const PatientRequestAnd = ({action,value}) => {
const {PatientRequestData,PatientApproveData,
  getPendingPatient,dataLimitApprovePatient,
  currentPageApprovePatient,getApproveRequest,
  loadingApprovePatient,loadingPendingPatient,
  dataLimitPendingPatient, currentPagePendingPatient}=action

  const [viewAll] = useState(true)
  const [spinner,setSpinner]=useState(false)
  const PatientApprove = requestAndApprovePatient(PatientApproveData?.patients?.data)
  const PatientRequest = requestAndApprovePatient(PatientRequestData?.pending_request?.data)



  const handleClickReview = async (id, status) => {
    try {
      setSpinner(true);
      const finalData = {
        id: id,
        approval: status === 'Reviewed' ? "reject" : status === 'Approve' ? 'approve' : 'reject'
      };
      const result = await ClinicianPatientStatus(finalData);
      if (result?.status === 200) {
        getPendingPatient(dataLimitPendingPatient, currentPagePendingPatient);
        getApproveRequest(dataLimitApprovePatient, currentPageApprovePatient);
      }
      setSpinner(false);
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setSpinner(false);
    }
  };
   
    
  return (
    <React.Fragment>
        <div className=''>
        <SimpleBackdrop open={spinner} />
         {loadingApprovePatient ? <TableSkeleton /> :
          <CriticalPatients value={value} patientData={PatientApprove} handleClickStatus={handleClickReview} viewAll={viewAll} />
        }
          <Pagination page={action?.currentPageApprovePatient} onChange={action?.handleChangePageApprovePatient} count={action?.totalPagesApprovePatient} variant="outlined" shape="rounded" className='table-pagination' />

          <div className="pp-table">
            <div className='table-title'>
              <h4>Patients Pending</h4>
            </div>
            {loadingPendingPatient ? <TableSkeleton /> :
            <CriticalPatients value={value} patientData={PatientRequest} handleClickStatus={handleClickReview} viewAll={viewAll}/>
            }
            <Pagination page={action?.currentPagePendingPatient} onChange={action?.handleChangePagePendingPatient} count={action?.totalPagesPendingPatient} variant="outlined" shape="rounded" className='table-pagination' />

          </div>
        </div>
    </React.Fragment>
  )
}

export default PatientRequestAnd