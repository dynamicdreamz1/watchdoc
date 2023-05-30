import React, { useEffect, useState } from 'react'
import Latestmeasurement from '../components/Patient/Measurement/Latestmeasurement'
import { UserBodyContextProvider } from '../Store/Context'
import Reminders from '../components/Patient/Reminder/Reminders';
import Heartrates from '../components/Patient/HeartRate/Heartrates';
import Bloodpressure from '../components/Patient/BloodPressure/Bloodpressure';
import BloodOxygen from '../components/Patient/BloodOxygen/BloodOxygen';
import Weight from '../components/Patient/Weight/Weight';
import BloodGlucose from '../components/Patient/BloodGlucose/BloodGlucose';
import Temperature from '../components/Patient/Temperature/Temperature';
import Header from '../components/Templates/Header';
import Sidebar from '../components/Templates/Sidebar';
import PatientProfileBar from '../components/Patient/Profile/PatientProfileBar';
import CriticalAlerts from '../components/common/Alerts/CriticalAlerts';
import { getLatestpatientDetails, getProviderTerraId} from '../services/PatientsService';
import { useLocation } from 'react-router-dom';
import { MetaFormeting } from '../Utility/functions';


const PatientsDetails = () => {
    const location=useLocation()
  const [latestData, setlatestData] = useState({})
  const [terraId,setTerraId]=useState([])
  const finalId = latestData?.data?.provider.map(item => item?.terra_id);
  const { state } = location || {};

  const fetchData=async()=>{
    const response= await getLatestpatientDetails(state?.id).then(response => response?.data)
    setlatestData(response);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const patientData = MetaFormeting(latestData?.data?.user_data)
const finalLatest={
    latest:patientData?.latest ? JSON.parse(patientData?.latest) : null,
    role_name:[],
    user_data:latestData?.data?.user_data,
    user_reminder:latestData?.data?.user_reminder
}
//   useEffect(() => {
//     async function fetchData() {
//         const result=await getProviderTerraId()
//         // setTerraId(result)         
//    }
  
//    fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);
  useEffect(() => {
    async function fetchData() {
        const result=await getProviderTerraId()
        setTerraId(result)         
   }
   fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

    return (
        <div className='content-wrapper'>
            <Sidebar />
            <div className='aside'>
                <Header />
                <UserBodyContextProvider >
                    <PatientProfileBar latestData={finalLatest}/>
                    <CriticalAlerts/>
                    <Latestmeasurement latestData={finalLatest} />
                    <Reminders latestData={finalLatest} fetchData={fetchData} />
                    <Heartrates terraId={finalId?.[0]} latestData={finalLatest}/>
                    <Bloodpressure terraId={finalId?.[0]} latestData={finalLatest}/>
                    <BloodOxygen terraId={finalId?.[0]} latestData={finalLatest}/>
                    <Weight terraId={finalId?.[0]} latestData={finalLatest}/>
                    <BloodGlucose />
                    <Temperature />
                </UserBodyContextProvider>
            </div>
        </div>
    )
}

export default PatientsDetails