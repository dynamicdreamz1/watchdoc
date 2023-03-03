import React, { useEffect, useState } from 'react'


import PatientHeartRateDetails from './Charts/HeartRate/PatientHeartRateDetails'
import PatientBloodPressureDetails from './Charts/BloodPressure/PatientBloodPressureDetails'
import NoDataRecorded from './NoData/NoDataRecorded'
import PatientBloodOxygenDetails from './Charts/BloodOxygen/PatientBloodOxygenDetails'
import PatientWeightDetail from './Charts/Weight/PatientWeightDetail'
import { ChartSkeleton,  NoDataRecordedSkeleton } from '../../Utility/Skeleton'
import { GetUserDailyBodyData } from '../../services/HelthData'
import { UserBodyContext } from '../../Store/Context'
import Latestmeasurement from './Measurement/Latestmeasurement'
import Reminders from './Reminder/Reminders'
import Hartrets from './Hartrets/Hartrets'
import Bloodpressure from './BloodPressure/Bloodpressure'


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
        <Hartrets />
        <Bloodpressure />


        
      
     
       
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Oxygen</h5>
            </div>
            <PatientBloodOxygenDetails/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Weight</h5>
            </div>
            <PatientWeightDetail/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Glucose</h5>
            </div>
            <NoDataRecordedSkeleton/>
            <NoDataRecorded/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Temperature</h5>
            </div>
            <NoDataRecordedSkeleton/>
            <NoDataRecorded/>
        </div>
        </UserBodyContext.Provider>
  )
}
