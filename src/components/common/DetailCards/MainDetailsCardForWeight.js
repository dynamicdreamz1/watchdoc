import React from 'react'
import RiskStatusForbloodPressure from './RiskStatusForbloodPressure';
import { GetdayHourMin } from '../../../Utility/functions';

export default function MainDetailsCardForWeight({latestData}) {
  const  date = GetdayHourMin(latestData?.latest?.weight?.date)
  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <div className='measurment-title d-flex align-items-center'>
        <span className='icon d-flex'><img src={`/images/weight-icon.svg`} alt='Weight Icon'/></span>
          <span className='name d-flex'>Weight</span>
        </div>
        <span className='time d-flex align-items-center'>
        {`${date?.data} ${date?.lable} ago`}
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <div className='measurment-result'>
        <span className='digit'>{latestData?.latest?.weight?.count} Kg</span>
      </div>
      <RiskStatusForbloodPressure/>
    </div>  
    </>
  )
}
