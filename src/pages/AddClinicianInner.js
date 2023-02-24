import React from 'react'
import Sidebar from '../components/Templates/Sidebar'
import Aside from '../components/Templates/Aside';
import AddClinician from '../components/Patient/AddClinician/AddClinician';
import Header from '../components/Templates/Header';

export default function AddClinicianInner() {
  return (
    <>
    <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          <AddClinician/>
        </div>
    </div>
    </>
  )
}
