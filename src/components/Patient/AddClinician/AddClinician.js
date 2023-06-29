import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { InnerClinicianContext } from '../../../pages/AddClinicianInner'
import { AddClincianOuterContext } from '../../../pages/AddClinicianOuter'
import { searchClinician } from '../../../services/ClinicianService'
import { AdminUserContext } from '../../Clinician/Overlays/CliniciansOverlay'
import AddClinicianButton from './AddClinicianButton'
import ConnectingClinician from './ConnectingClinician'
import PractitionersCard from './PractitionersCard' 
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import SimpleBackdrop from '../../../Utility/Skeleton'


export default function AddClinician({ status, setStatus }) {
  const location=useLocation();
  const { t } = useTranslation();
  const [show, setShow] = useState(false)
  const [defaultStatus, setDefaultStatus] = useState(false)
  const navigate=useNavigate();
  const [isSkeleton,setIsSkeleton]=useState(false)
  const { addData, setAddData,nextBtn,setClinicianData} = useContext(location.pathname === "/editclinician" ? InnerClinicianContext : location.pathname==="/addclinician" ? AddClincianOuterContext : location.pathname==="/patientdetails"?AdminUserContext:"" )



  const [currentPageClinician, setCurrentPageClinician] = useState(1);
  const [totalPagesClinician, setTotalPagesClinician] = useState(0);
  const [dataLimitClinician] = useState(3)
  const [message,setmessage]=useState("")
  const[spinner,setSpinner]=useState(false)


  
 

  const handleSubmit = (e) => {
    e.preventDefault()
   if(addData.clinicianName!=="" || addData?.code!==""||addData?.practitionerName!==""){       
    setIsSkeleton(true)  
   }
   setSpinner(true)
    const data = {
      clinician_name: addData?.clinicianName,
      practice_name: addData?.practitionerName,
      zip: addData?.code
    }
    searchClinician(data,dataLimitClinician,currentPageClinician)
      .then((response) => {
        if(response?.data?.data?.length===0){
          setmessage('Clinician Not Found')
        }
        setClinicianData(response)
        setSpinner(false)
        setTotalPagesClinician(Math.ceil(response?.data?.data?.total / dataLimitClinician))
        setIsSkeleton(false)
        setCurrentPageClinician(1)
        setTimeout(() => setmessage(""),2000);
      })

      .catch((error) => {
        console.log(error)
      })
  
  }
  const action={
    currentPageClinician,
    setCurrentPageClinician,
    totalPagesClinician,
    dataLimitClinician,
    setTotalPagesClinician


  }
  return (
    <>
  
      {location.pathname === "/addclinician" ?
        <>
          <ConnectingClinician show={show} setShow={setShow} defaultStatus={defaultStatus} setDefaultStatus={setDefaultStatus} />
          <div>
            {defaultStatus === true ?
              <AddClinicianButton show={show} setShow={setShow} /> : ""}
          </div>
              <h3 onClick={()=>navigate('/dashboard')}> <div className='skip-button' ><Button style={{marginleft: "347px", margintop: "10px"}} variant="outlined" endIcon={<SendIcon/>}>Skip</Button></div></h3>
          {show ?
            <>
              <div className='add-clinician-box'>
                <div className='title'>
                  <p> {t('AddClinician.p1')}</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className='form-box'>
                    <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={addData?.clinicianName} onChange={(e) => setAddData({ ...addData, clinicianName: e.target.value })} id="" className="name" />
                    <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={addData?.practitionerName} onChange={(e) => setAddData({ ...addData, practitionerName: e.target.value })} className="number" />
                    <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={addData?.code} onChange={(e) => setAddData({ ...addData, code: e.target.value })} className="postcode" />
                    <input type="submit" value={t('AddClinician.form.b1')} />
                  </div>
                </form>
              </div>

              <PractitionersCard  status={status} setStatus={setStatus} isSkeleton={isSkeleton} action={action}/>
              { nextBtn ?  <div className='btn-block'><button className='btn' onClick={()=>navigate("/dashboard")}> {t('AddClinician.button')} </button></div> : ""  } 
            </>
            : ""

          }
        </>
        :
        location.pathname==="/editclinician" ? 
        <>
        <SimpleBackdrop open={spinner}/>
          <div className='add-clinician-box'>
            <div className='title'>
              <p> {t('AddClinician.p1')}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-box'>
                <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={addData?.clinicianName} onChange={(e) => setAddData({ ...addData, clinicianName: e.target.value })} id="" className="name" />
                <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={addData?.practitionerName} onChange={(e) => setAddData({ ...addData, practitionerName: e.target.value })} className="number" />
                <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={addData?.code} onChange={(e) => setAddData({ ...addData, code: e.target.value })} className="postcode" />
                <input type="submit" value={t('AddClinician.form.b1')} />
              </div>
            </form>
            <span style={{ color: "red" }}>{message?message:""}</span>

          </div>
         
          <PractitionersCard  status={status} setStatus={setStatus} isSkeleton={isSkeleton} action={action}/> 

        </> 
        : 
        location.pathname==="/patientdetails" ? 
        <>
        <div className='add-clinician-box'>
            <br/> 
            <form onSubmit={handleSubmit}>
              <div className='form-box'>
                <input type="text" placeholder={t('AddClinician.form.placeholder1')} value={addData?.clinicianName} onChange={(e) => setAddData({ ...addData, clinicianName: e.target.value })} id="" className="name" />
                <input type="text" placeholder={t('AddClinician.form.placeholder2')} value={addData?.practitionerName} onChange={(e) => setAddData({ ...addData, practitionerName: e.target.value })} className="number" />
                <input type="text" placeholder={t('AddClinician.form.placeholder3')} value={addData?.code} onChange={(e) => setAddData({ ...addData, code: e.target.value })} className="postcode" />
                <input type="submit" value={t('AddClinician.form.b1')} />
              </div>
            </form>
          </div>
          <PractitionersCard  status={status} setStatus={setStatus} isSkeleton={isSkeleton} action={action}/> 
          </>
        : ""
      }

      
    </>
  )
}
