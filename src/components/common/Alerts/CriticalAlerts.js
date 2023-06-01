import React from 'react'
import AlertCard from './AlertCard'

export default function CriticalAlerts({latestData}) {
  return (
    <>
        <div className='critical-alerts-wrapper mt-22'>
            <div className="section-title d-flex align-items-center justify-content-between">
                <h5>Critical Alerts</h5>
                <button type='button'>View All Alerts (41)</button>
            </div>
            <div className='wrapper'>
              {
                latestData?.criteria_alert?.map((item, I) => {
                return <> <AlertCard alertData={item} key={I}/> <br/></>
              })
              }
            </div>
        </div>
    </>
  )
}
