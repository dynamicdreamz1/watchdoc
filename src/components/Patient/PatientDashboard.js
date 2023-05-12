import React, { useEffect ,useState} from 'react'
import { UserBodyContextProvider } from '../../Store/Context'
import Latestmeasurement from './Measurement/Latestmeasurement'
import Reminders from './Reminder/Reminders'
import Bloodpressure from './BloodPressure/Bloodpressure'
import Heartrates from './HeartRate/Heartrates'
import BloodOxygen from './BloodOxygen/BloodOxygen'
import BloodGlucose from './BloodGlucose/BloodGlucose'
import Temperature from './Temperature/Temperature'
import Weight from './Weight/Weight'
import { getProviderTerraId } from '../../services/PatientsService'


export default function PatientDashboard() {


  const [terraId,setTerraId]=useState([])


  const finalId = terraId?.data?.map(item => item.terra_id);


  useEffect(() => {
    async function fetchData() {
  
        const result=await getProviderTerraId()
        setTerraId(result)
         
   }
  
   fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    
  return (
        
        <UserBodyContextProvider >
          <Latestmeasurement />        
          <Reminders />
          <Heartrates terraId={finalId?.[0]}/>
          <Bloodpressure terraId={finalId?.[0]}/>
          <BloodOxygen terraId={finalId?.[0]}/>
          <Weight/>
          <BloodGlucose/>
          <Temperature/>
        </UserBodyContextProvider>
  )
}
