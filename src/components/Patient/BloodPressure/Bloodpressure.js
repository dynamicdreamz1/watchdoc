import React from 'react'
import PatientBloodPressureDetails from '../Charts/BloodPressure/PatientBloodPressureDetails'

export default function Bloodpressure() {
  return (
    <div className='mt-22'>
            <div className='section-title'>
                <h5>Blood Pressure</h5>
            </div>
            <PatientBloodPressureDetails/>
        </div>
  )
}
