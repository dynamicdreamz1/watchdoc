import React from 'react'
import { useTranslation } from 'react-i18next'
// import { InnerClinicianContext } from '../../pages/AddClinicianInner';


export default function PageTitle({toggle,setToggle}) {

  const {t}=useTranslation();
  // const {addData,setAddData}=useContext(InnerClinicianContext)

  const handleClick=()=>{
    setToggle(!toggle)
    // setAddData({...addData,clinicianName:"",practitionerName:"",code:""});
  }
  

  return (
    <>
        <div className='page-title'>
         
         {window.location.pathname==='/dashboard' ? <h1>{t(('DashboardPage.SideBar.title1'))}</h1> : ""}
         {window.location.pathname==='/editclinician' ? <h1>{t(('DashboardPage.SideBar.title2'))} <button onClick={()=>handleClick()} type='button'><img src="/images/Add-Button-White.svg" alt='button' /></button></h1> : ""}
         {window.location.pathname==='/edit-profile' ? <h1>{t(('DashboardPage.SideBar.title3'))}</h1> : ""}
         {window.location.pathname==='/editlinkdevice' ? <h1>{t(('DashboardPage.SideBar.title4'))}</h1> : ""}
         {window.location.pathname==="/patients" ? <h1>{t('DashboardPage.SideBar.ClinicianSideBar.t2')}</h1> : ""}
         {window.location.pathname==="/clinicians" ? <h1>{t('DashboardPage.SideBar.ClinicianSideBar.t3')}</h1> : ""}
         {window.location.pathname==="/staff-users" ? <h1>Staff Users +</h1> : ""}
        </div>
    </>
  )
}
