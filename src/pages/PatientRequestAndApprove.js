import React, {useState} from 'react'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import {  requestAndApprovePatient } from '../Utility/functions'


const PatientRequestAnd = ({PatientRequestData,PatientApproveData}) => {

  const [viewAll] = useState(true)
  const PatientApprove = requestAndApprovePatient(PatientApproveData?.patients)
  const PatientRequest = requestAndApprovePatient(PatientRequestData?.pending_request)

    const handleClickReview = (data) => {
    }   
  return (
    <React.Fragment>
        <div className=''>
         <div>
         </div>
          <CriticalPatients patientData={PatientApprove} handleClickStatus={handleClickReview} viewAll={viewAll} />
          <div className="pp-table">
            <div className='table-title'>
              <h4>Patients Pending</h4>
            </div>
            <CriticalPatients patientData={PatientRequest} handleClickStatus={handleClickReview} viewAll={viewAll} />
          </div>
        </div>
    </React.Fragment>
  )
}

export default PatientRequestAnd