import React from 'react'
import RiskStatusForbloodPressure from './RiskStatusForbloodPressure';
import { GetdayHourMin } from '../../../Utility/functions';

export default function MainDetailsCardForSleep({latestData}) {
  const  date = GetdayHourMin(latestData?.latest?.sleep?.date)
  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <div className='measurment-title d-flex align-items-center'>
        <span className='icon d-flex'><img src={`/images/temperature-icon.svg`} alt='Weight Icon'/></span>

          <span className='name d-flex'>Sleep</span>
          {/* <span className='name d-flex'>{el?.name}</span> */}

        </div>
        <span className='time d-flex align-items-center'>
        {`${date.data} ${date.lable} ago`}
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <div className='measurment-result'>
        {/* <span className='digit'>{HeartRateAvg === undefined || el === undefined ?"":HeartRateAvg?.heart_data?.[el?.id]?.count}</span> */}
        <span className='digit'>{latestData?.latest?.sleep?.count}</span>

        {/* <span className='type'>{el?.label}</span> */}

      </div>
      <RiskStatusForbloodPressure/>
    </div>  
    </>
  )
}
