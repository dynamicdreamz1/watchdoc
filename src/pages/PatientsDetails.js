import React from 'react'
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

const PatientsDetails = () => {
    return (
        <div className='content-wrapper'>
            <Sidebar />

            <div className='aside'>
                <Header />


                <UserBodyContextProvider >
                    <Latestmeasurement />
                    <Reminders />
                    <Heartrates />
                    <Bloodpressure />
                    <BloodOxygen />
                    <Weight />
                    <BloodGlucose />
                    <Temperature />
                </UserBodyContextProvider>
            </div>
        </div>
    )
}

export default PatientsDetails