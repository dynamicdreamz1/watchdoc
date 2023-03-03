import React, { useEffect, useState } from 'react'

import { GetUserDailyBodyData } from '../../services/HelthData'
import { UserBodyContext } from '../../Store/Context'
import Latestmeasurement from './Measurement/Latestmeasurement'
import Reminders from './Reminder/Reminders'
import Bloodpressure from './BloodPressure/Bloodpressure'
import Heartrates from './HeartRate/Heartrates'
import BloodOxygen from './BloodOxygen/BloodOxygen'
import BloodGlucose from './BloodGlucose/BloodGlucose'
import Temperature from './Temperature/Temperature'


export default function PatientDashboard() {
    const[userBodyData,SetDailyBodyData] =useState({
        data:[],
        type:'',
        user:{},
        version:'',
        _id:''
    });
   
    // eslint-disable-next-line no-undef
    useEffect(() => {
            async function fetchData() {
                await GetUserDailyBodyData().then(response => response?.data?.requested_data ).then(SetDailyBodyData);
           }
          fetchData();
      return () => {
      }
    }, [])
    




   


  return (
        
    <UserBodyContext.Provider value={userBodyData?.data[0]}>
        <Latestmeasurement />        
        <Reminders />
        <Heartrates />
        <Bloodpressure />
        <BloodOxygen/>
        <BloodGlucose/>
        <Temperature/>
    </UserBodyContext.Provider>
  )
}
