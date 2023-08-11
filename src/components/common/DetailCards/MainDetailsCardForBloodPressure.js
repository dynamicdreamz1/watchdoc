import React from 'react'
import RiskStatusForbloodPressure from './RiskStatusForbloodPressure';
import { GetdayHourMin } from '../../../Utility/functions';

export default function MainDetailsCardForBloodPressure({action}) {
  const {latestData}=action
  const  date = GetdayHourMin(latestData?.latest?.blood_pressure?.date)

  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <div className='measurment-title d-flex align-items-center'>
          <span className='icon d-flex'><img src='/images/heart-rate-icon.svg' alt='Heart Rate Icon'/></span>
          <span className='name d-flex'>Latest Blood Pressure</span>
        </div>
        <span className='time d-flex align-items-center'>
         {`${date?.data} ${date?.lable} ago`}
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <div className='measurment-result'>
        <span className='digit' style={{color:'red'}}>{latestData?.latest?.blood_pressure?.count}</span>
      </div>
      <RiskStatusForbloodPressure/>
    </div>  
    </>
  )
}
