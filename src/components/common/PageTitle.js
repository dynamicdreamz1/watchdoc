import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PageTitle({toggle,setToggle}) {

  const {t}=useTranslation();

  const handleClick=()=>{
    setToggle(!toggle)
    
  }

  return (
    <>
        <div className='page-title'>
         
         {window.location.pathname==='/dashboard' ? <h1>{t(('DashboardPage.SideBar.title1'))}</h1> : ""}
         {window.location.pathname==='/editclinician' ? <h1>{t(('DashboardPage.SideBar.title2'))} <button onClick={()=>handleClick()} type='button'><img src="/images/Add-Button-White.svg" alt='button' /></button></h1> : ""}
         {window.location.pathname==='/edit-profile' ? <h1>{t(('DashboardPage.SideBar.title3'))}</h1> : ""}
         {window.location.pathname==='/editlinkdevice' ? <h1>{t(('DashboardPage.SideBar.title4'))}</h1> : ""}
         
        </div>
    </>
  )
}
