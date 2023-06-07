import React, { createContext, useState } from 'react'
import AddClinician from '../../Patient/AddClinician/AddClinician'
import ClinicianInfoRow from '../../common/Table/ClinicianInfoRow';

export const AdminUserContext = createContext([]);

export default function CliniciansOverlay() {
  const [toggleAddClinicain, setToggleAddClinicain] = useState(false)
  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextBtn, setNextBtn] = useState(false)
  const [status, setStatus] = useState(false)
  const tempData = clinicianData?.data?.data?.data?.filter((el) => el.status === 1);

  return (
    <>
      <AdminUserContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData, nextBtn, setNextBtn, currentPage, setCurrentPage }}>
        <div className='clinician-overlay'>
          <div className='dialog-title'>
            <h2>Clinicians</h2>
            <p>The following clinicians are connected to this patient.</p>
          </div>

          {tempData?.length > 0 && tempData?.map((element) => (
            <React.Fragment key={element.id}><ClinicianInfoRow data={element} clinicianStaff={tempData} /></React.Fragment>
          ))}

          <button className="connect-btn" onClick={() => setToggleAddClinicain(!toggleAddClinicain)}><img src="/images/Add-rounded-button.svg" alt="" />Connect a Clinician</button>
          {toggleAddClinicain ?
            <AddClinician status={status} setStatus={setStatus} /> : ""
          }
        </div>
      </AdminUserContext.Provider>
    </>
  )
}
