import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';
// import { InnerClinicianContext } from '../../pages/AddClinicianInner';

export default function PageTitle({ toggle, setToggle, setOpen }) {
const location=useLocation();


  const { t } = useTranslation();

  const handleClick = () => {
    setToggle(!toggle)
  }


  return (
    <>
      <div className='page-title'>

        {location.pathname === '/dashboard' ? <h1>{t(('DashboardPage.SideBar.title1'))}</h1> :
          location.pathname === '/editclinician' ? <h1>{t(('DashboardPage.SideBar.title2'))} <button onClick={() => handleClick()} type='button'><img src="/images/Add-Button-White.svg" alt='button' /></button></h1> :
            location.pathname === '/edit-profile' ? <h1>{t(('DashboardPage.SideBar.title3'))}</h1> :
              location.pathname === '/editlinkdevice' ? <h1>{t(('DashboardPage.SideBar.title4'))}</h1> :
                location.pathname === "/patients" ? <h1>{t('DashboardPage.SideBar.ClinicianSideBar.t2')}</h1> :
                  (location.pathname === "/clinicians" || location.pathname === "/cliniciandetails") ? <h1>{t('DashboardPage.SideBar.ClinicianSideBar.t3')} <button onClick={() => setOpen(true)} type='button'><img src="/images/Add-Button-White.svg" alt='button' /></button></h1> :
                    location.pathname === "/staffusers" ? <h1>Staff Users <button onClick={() => setOpen(true)} type='button'><img src="/images/Add-Button-White.svg" alt='button' /></button></h1> : ""}
      </div>
    </>
  )
}
