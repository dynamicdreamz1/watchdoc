import React from 'react'
import AlertCard from './AlertCard'

export default function CriticalAlerts() {
  return (
    <>
        <div className='critical-alerts-wrapper mt-22'>
            <div className="section-title d-flex align-items-center justify-content-between">
                <h5>Critical Alerts</h5>
                <button type='button'>View All Alerts (41)</button>
            </div>
            <div className='wrapper'>
                <AlertCard/>
                <AlertCard/>
                <AlertCard/>
            </div>
        </div>
    </>
  )
}