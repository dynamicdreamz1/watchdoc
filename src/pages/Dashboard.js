import React from 'react'


import Aside from '../components/common/Aside';
import Sidebar from '../components/common/Sidebar'


const Dashboard = () => {

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <Aside />
      </div>
    </React.Fragment>
  )
}

export default Dashboard;
