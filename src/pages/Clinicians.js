import React, { useState } from 'react'
import CliniciansTableTabs from '../components/Clinician/CliniciansTableTabs';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';

const Clinicians = () => {
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState();
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar />
        <div className='aside'>
          <Header setOpen={setOpen} setSearchData={setSearchData} searchData={searchData}/>
          <CliniciansTableTabs open={open} setOpen={setOpen} searchData={searchData} setValue={setValue} value={value} setSearchData={setSearchData}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Clinicians;
