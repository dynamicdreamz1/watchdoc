import React from 'react'
import Sidebar from '../components/Templates/Sidebar'
import Aside from '../components/Templates/Aside';

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
