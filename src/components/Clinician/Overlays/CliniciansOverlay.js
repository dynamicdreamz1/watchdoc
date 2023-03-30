import React, { createContext, useState } from 'react'
import AddClinician from '../../Patient/AddClinician/AddClinician'
import ClinicianInfoRow from '../../common/Table/ClinicianInfoRow'


export const AdminUserContext=createContext([]);
export default function CliniciansOverlay() {
 

  const [addData, setAddData] = useState({ clinicianName: "", practitionerName: "", code: "" })
  const [clinicianData, setClinicianData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextBtn,setNextBtn]=useState(false)
  const [status, setStatus] = useState(false)


  const [clinicianStaff] = useState([
    {
      "id": 1,
      "email": "info@neighbourhoodmedical.com.au",
      "email_verified_at": null,
      "t&c": 0,
      "profile_created": 0,
      "contact_number": null,
      "mobile_num_verify": 0,
      "is_active": 0,
      "verification_code": 1691,
      "terra_user_id": null,
      "created_at": "2023-02-27T06:09:21.000000Z",
      "updated_at": "2023-02-27T06:09:21.000000Z",
      "firstname": "Dr Randerson",
      "lastname": "Michael",
      "practicename": "Randerson",
      "meta_data": [
        {
          "id": 6,
          "meta_key": "full_name",
          "meta_value": "Dr Randerson Michael"
        },
        {
          "id": 8,
          "meta_key": "zip",
          "meta_value": "395002"
        },
        {
          "id": 201,
          "meta_key": "image",
          "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
        },
        {
          "id": 209,
          "meta_key": "address",
          "meta_value": "594 Rafe Lane , Southaven , Mississippi."
        }
      ]
    },
  ]
  )

  console.log(clinicianData?.data?.data?.data)
  const tempData=clinicianData?.data?.data?.data?.filter((el)=>el.status===1);
  return (
    <>
    <AdminUserContext.Provider value={{ addData, setAddData, clinicianData, setClinicianData,nextBtn,setNextBtn,currentPage, setCurrentPage  }}>
      <div className='clinician-overlay'>
        <div className='dialog-title'>
          <h2>Clinicians</h2>
          <p>The following clinicians are connected to this patient.</p>
        </div>

        {tempData?.length > 0 && tempData?.map((element) => (
          <React.Fragment key={element.id}><ClinicianInfoRow data={element} clinicianStaff={tempData} /></React.Fragment>
        ))}
      
        <button>Connect a Clinician</button>
          <AddClinician status={status} setStatus={setStatus} />
      </div>
      </AdminUserContext.Provider>
    </>
  )
}
