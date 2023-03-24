import React, { useEffect } from 'react'
import Sidebar from '../components/Templates/Sidebar'
import Aside from '../components/Templates/Aside';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
const navigate=useNavigate();
  useEffect(()=>{
    navigate("/dashboard")
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

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
