import React, { useState } from 'react'
import CliniciansTableTabs from '../components/Clinician/CliniciansTableTabs';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';

const Clinicians = () => {
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState();

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar />
        <div className='aside'>
          <Header setOpen={setOpen} setSearchData={setSearchData} />
          <CliniciansTableTabs open={open} setOpen={setOpen} searchData={searchData} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Clinicians;
