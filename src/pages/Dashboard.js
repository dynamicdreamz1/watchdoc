import React from 'react'
import Sidebar from '../components/dashboard/templates/Sidebar';
import Aside from '../components/dashboard/templates/Aside';

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <Aside/>
      </div>
    </React.Fragment>
  )
}

export default Dashboard;
