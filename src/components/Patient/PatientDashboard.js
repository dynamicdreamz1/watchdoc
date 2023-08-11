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
import { getLatestMeasurement, getProviderTerraId } from '../../services/PatientsService'
import { ReminderCardSkeleton } from '../../Utility/Skeleton'
import { toast } from 'react-toastify'

export default function PatientDashboard() {
  const [latestData, setlatestData] = useState({})
  const [terraId,setTerraId]=useState([])
  const finalId = terraId?.data?.map(item => item?.terra_id);
  const [loadingSkeleton,setLoadingSkeleton]=useState(false)

  async function fetchData() {
    try {
      setLoadingSkeleton(true);
      const response = await getLatestMeasurement();
      const data = response?.data;
      setlatestData(data);
      setLoadingSkeleton(false);
    }
     catch (error) {
      setLoadingSkeleton(false);
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
    }
  }
  
  useEffect(() => {   
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
          { loadingSkeleton ? <ReminderCardSkeleton className="reminder-card" /> : <Reminders latestData={latestData} fetchData={fetchData} />}
          <Heartrates terraId={finalId?.[0]} latestData={latestData} />
          <Bloodpressure terraId={finalId?.[0]} latestData={latestData}/>
          <BloodOxygen terraId={finalId?.[0]} latestData={latestData}/>
          <Weight latestData={latestData}/>
          {/* <Sleep latestData={latestData}/>
          <Step latestData={latestData}/> */}
          <BloodGlucose/>
          <Temperature/>
        </UserBodyContextProvider>
  )
}
