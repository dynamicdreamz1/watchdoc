import React from 'react'
import { useTranslation } from 'react-i18next'


export default function PageTitle() {

  const {t}=useTranslation();

  if(window.location.pathname==='/dashboard'){
    <h1>{t(('DashboardPage.d3'))}</h1>
  }
  return (
    <>
        <div className='page-title'>
         
         {window.location.pathname==='/dashboard' ? <h1>{t(('DashboardPage.SideBar.title1'))}</h1> : ""}
         {window.location.pathname==='/editclinician' ? <h1>{t(('DashboardPage.SideBar.title2'))}</h1> : ""}
         {window.location.pathname==='/edit-profile' ? <h1>{t(('DashboardPage.SideBar.title3'))}</h1> : ""}
         {window.location.pathname==='/editlinkdevice' ? <h1>{t(('DashboardPage.SideBar.title4'))}</h1> : ""}
        </div>
    </>
  )
}
