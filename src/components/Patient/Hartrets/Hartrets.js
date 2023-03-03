import React from 'react'
import { ChartSkeleton } from '../../../Utility/Skeleton'
import PatientHeartRateDetails from '../Charts/HeartRate/PatientHeartRateDetails'

export default function Hartrets() {
  return (
    <div className='mt-22'>
        <div className='section-title'>
            <h5>Heart Rate</h5>
        </div>
        <ChartSkeleton/>
        <PatientHeartRateDetails/>
    </div>
  )
}
