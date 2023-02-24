import React from 'react'
import PatientProfileBar from './Profile/PatientProfileBar'
import AlertCard from './Alerts/AlertCard'
import MeasurementCard from './Measurement/MeasurementCard'
import ReminderCard from './Reminder/ReminderCard'
import PatientHeartRateDetails from './Charts/HeartRate/PatientHeartRateDetails'
import PatientBloodPressureDetails from './Charts/BloodPressure/PatientBloodPressureDetails'
import NoDataRecorded from './NoData/NoDataRecorded'
import PatientBloodOxygenDetails from './Charts/BloodOxygen/PatientBloodOxygenDetails'
import PatientWeightDetail from './Charts/Weight/PatientWeightDetail'

export default function PatientDashboard() {
  return (
    <div>
        <PatientProfileBar/>
        <div className='alert-cards-wrapper mt-22'>
            <div className='section-title'>
                <h5>Critical Alerts</h5>
            </div>
            <div className='wrapper'>
                <AlertCard/>
                <AlertCard/>
                <AlertCard/>
            </div>
        </div>
        <div className='measurment-cards-wrapper mt-22'>
            <div className='section-title'>
                <h5>Lastest Measurements</h5>
            </div>
            <div className='wrapper d-flex flex-wrap'>
                <MeasurementCard/>
                <MeasurementCard/>
                <MeasurementCard/>
                <MeasurementCard/>
                <MeasurementCard/>
                <MeasurementCard/>
            </div>
        </div>
        <div className='reminder-cards-wrapper mt-22'>
            <div className='section-title'>
                <h5>Lastest Measurements</h5>
            </div>
            <div className='wrapper d-flex flex-wrap'>
                <ReminderCard/>
                <ReminderCard/>
                <ReminderCard/>
            </div>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Heart Rate</h5>
            </div>
            <PatientHeartRateDetails/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Pressure</h5>
            </div>
            <PatientBloodPressureDetails/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Oxygen</h5>
            </div>
            <PatientBloodOxygenDetails/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Oxygen</h5>
            </div>
            <PatientWeightDetail/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Glucose</h5>
            </div>
            <NoDataRecorded/>
        </div>
        <div className='mt-22'>
            <div className='section-title'>
                <h5>Temperature</h5>
            </div>
            <NoDataRecorded/>
        </div>
    </div>
  )
}
