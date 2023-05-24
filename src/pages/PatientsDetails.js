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
import { getLatestMeasurement, getProviderTerraId } from '../services/PatientsService';

const PatientsDetails = () => {
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
        <div className='content-wrapper'>
            <Sidebar />
            <div className='aside'>
                <Header />
                <UserBodyContextProvider >
                    <PatientProfileBar/>
                    <CriticalAlerts/>
                    <Latestmeasurement latestData={latestData} />
                    <Reminders />
                    <Heartrates terraId={finalId?.[0]} latestData={latestData}/>
                    <Bloodpressure terraId={finalId?.[0]} latestData={latestData}/>
                    <BloodOxygen terraId={finalId?.[0]} latestData={latestData}/>
                    <Weight />
                    <BloodGlucose />
                    <Temperature />
                </UserBodyContextProvider>
            </div>
        </div>
    )
}

export default PatientsDetails