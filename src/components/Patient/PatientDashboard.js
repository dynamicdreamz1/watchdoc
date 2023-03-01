import React from 'react'
import MeasurementCard from './Measurement/MeasurementCard'
import ReminderCard from './Reminder/ReminderCard'
import PatientHeartRateDetails from './Charts/HeartRate/PatientHeartRateDetails'
import PatientBloodPressureDetails from './Charts/BloodPressure/PatientBloodPressureDetails'
import NoDataRecorded from './NoData/NoDataRecorded'
import PatientBloodOxygenDetails from './Charts/BloodOxygen/PatientBloodOxygenDetails'
import PatientWeightDetail from './Charts/Weight/PatientWeightDetail'


export default function PatientDashboard() {

    let measurment = [
        {
            "status": "high",
            "icon": "heart-rate-icon.svg",
            "type": "Heart Rate",
            "result": "170",
            "label": "bpm",
            "time": "1 min ago"
        },
        {
            "status": "high",
            "icon": "heart-rate-icon.svg",
            "type": "Blood Pressure",
            "result": "180/80",
            "label": "",
            "time": "2 days ago"
        },
        {
            "status": "normal",
            "icon": "blood-oxygen-icon.svg",
            "type": "Blood Oxygen",
            "result": "97",
            "label": "%",
            "time": "1 min ago"
        },
        {
            "status": "normal",
            "icon": "blood-glucose-icon.svg",
            "type": "Blood Glucose",
            "result": "-",
            "label": "",
            "time": "No Data"
        },
        {
            "status": "normal",
            "icon": "weight-icon.svg",
            "type": "Weight",
            "result": "83.2",
            "label": "kg",
            "time": "12 days ago"
        },
        {
            "status": "none",
            "icon": "temperature-icon.svg",
            "type": "Temperature",
            "result": "-",
            "label": "",
            "time": "No data"
        }
    ]

  return (
    <>
        
        <div className='measurment-cards-wrapper mt-22'>
            <div className='section-title'>
                <h5>Lastest Measurements</h5>
            </div>
            <div className='wrapper d-flex flex-wrap'>
                {
                    measurment.map((block ,i)=> {
                        return <MeasurementCard key={i} block={block}/>
                    })
                }
            </div>
        </div>
        <div className='reminder-cards-wrapper mt-22'>
            <div className='section-title'>
                <h5>Reminders</h5>
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
                <h5>Weight</h5>
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
    </>
  )
}
