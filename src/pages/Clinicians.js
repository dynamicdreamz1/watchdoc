import React from 'react'
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';

const Clinicians = () => {
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header />
          
        </div>
    </div>
    </React.Fragment>
  )
}

export default Clinicians;
