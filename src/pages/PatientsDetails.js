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
import { getLatestpatientDetails} from '../services/PatientsService';
import { useLocation } from 'react-router-dom';
import { MetaFormeting } from '../Utility/functions';
import { ReminderCardSkeleton } from '../Utility/Skeleton';


const PatientsDetails = () => {
  const location=useLocation()
  const { state } = location || {};
  const [latestData, setlatestData] = useState({})
  const finalId = latestData?.data?.provider.map(item => item?.terra_id);
  const [loadingSkeleton,setLoadingSkeleton]=useState(false)
  const fetchData=async()=>{
    setLoadingSkeleton(true)
    const response= await getLatestpatientDetails(state?.id).then(response => response?.data)
    setlatestData(response);
    setLoadingSkeleton(false)
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
    reminder:latestData?.data?.user_reminder,
    criteria_alert:latestData?.data?.criteria_alert
}
console.log("1111-finalLatest",finalLatest)
    return (
        <div className='content-wrapper'>
            <Sidebar />
            <div className='aside'>
                <Header />
                <UserBodyContextProvider >
                    <PatientProfileBar latestData={finalLatest}/>
                    <CriticalAlerts latestData={finalLatest} fetchData={fetchData}/>
                    <Latestmeasurement latestData={finalLatest} />
                   { loadingSkeleton ? <ReminderCardSkeleton className="reminder-card" /> : <Reminders latestData={finalLatest} fetchData={fetchData} />}
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