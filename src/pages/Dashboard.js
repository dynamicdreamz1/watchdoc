import React from 'react'
import Sidebar from '../components/Templates/Sidebar'
import Aside from '../components/Templates/Aside';
// import { StoreCookie } from '../Utility/sessionStore'

const Dashboard = () => {



  // console.log(StoreCookie.getItem("profileCheck"))
  // console.log(StoreCookie.getItem("user_details"))
  // console.log(StoreCookie.getItem("token"))
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
