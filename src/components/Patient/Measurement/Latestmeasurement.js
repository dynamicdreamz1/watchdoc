import React from 'react'
import { MeasurmentCardSkeleton } from '../../../Utility/Skeleton'

export default function Latestmeasurement() {
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
    <div className='measurment-cards-wrapper mt-22'>
        <div className='section-title'>
            <h5>Lastest Measurements</h5>
        </div>
        <div className='wrapper d-flex flex-wrap'>

            <MeasurmentCardSkeleton/>
            
           {/* {
                measurment.map((block ,i)=> {
                    return <MeasurementCard key={i} block={block}/>
                }) 
            }  */}
        </div>
    </div>
  )
}
