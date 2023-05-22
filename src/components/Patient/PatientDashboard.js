import React, { useEffect ,useState} from 'react'
import { UserBodyContextProvider } from '../../Store/Context'
import Latestmeasurement from './Measurement/Latestmeasurement'
import Reminders from './Reminder/Reminders'
import Bloodpressure from './BloodPressure/Bloodpressure'
import Heartrates from './HeartRate/Heartrates'
import BloodOxygen from './BloodOxygen/BloodOxygen'
import BloodGlucose from './BloodGlucose/BloodGlucose'
import Temperature from './Temperature/Temperature'
import Sleep from "./Sleep/Sleep"
import Weight from './Weight/Weight'
import { getLatestMeasurement, getProviderTerraId } from '../../services/PatientsService'
import Step  from './Step/Step'

export default function PatientDashboard() {
  const [latestData, setlatestData] = useState({})
  const [terraId,setTerraId]=useState([])
  const finalId = terraId?.data?.map(item => item?.terra_id);
  
  useEffect(() => {
    async function fetchData() {
        await getLatestMeasurement().then(response => response?.data).then(response => {
            setlatestData(response);
        })
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

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
          <Latestmeasurement latestData={latestData}/>        
          <Reminders />
          <Heartrates terraId={finalId?.[0]} latestData={latestData} />
          <Bloodpressure terraId={finalId?.[0]} latestData={latestData}/>
          <BloodOxygen terraId={finalId?.[0]} latestData={latestData}/>
          <Weight latestData={latestData}/>
          <Sleep latestData={latestData}/>
          <Step latestData={latestData}/>
          <BloodGlucose/>
          <Temperature/>
        </UserBodyContextProvider>
  )
}
