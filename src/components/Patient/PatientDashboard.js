import React from 'react'


import { UserBodyContextProvider } from '../../Store/Context'
import Latestmeasurement from './Measurement/Latestmeasurement'
import Reminders from './Reminder/Reminders'
import Bloodpressure from './BloodPressure/Bloodpressure'
import Heartrates from './HeartRate/Heartrates'
import BloodOxygen from './BloodOxygen/BloodOxygen'
import BloodGlucose from './BloodGlucose/BloodGlucose'
import Temperature from './Temperature/Temperature'
import Weight from './Weight/Weight'


export default function PatientDashboard() {
    
  return (
        
        <UserBodyContextProvider >
          <Latestmeasurement />        
          <Reminders />
          <Heartrates />
          <Bloodpressure />
          <BloodOxygen/>
          <Weight/>
          <BloodGlucose/>
          <Temperature/>
        </UserBodyContextProvider>
  )
}
