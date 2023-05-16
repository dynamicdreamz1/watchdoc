import React from 'react'
import RiskStatusForBloodOxygen from './RiskStatusForBloodOxygen';

export default function MainDetailsCardForBloodOxygen({HeartRateAvg,latestData}) {


  return (
    <>
    <div className='chart-details-card'>
      <div className='title d-flex justify-content-between'>
        <div className='measurment-title d-flex align-items-center'>
          <span className='icon d-flex'><img src='/images/heart-rate-icon.svg' alt='Heart Rate Icon'/></span>
          <span className='name d-flex'>Latest Blood Oxygen</span>
          {/* <span className='name d-flex'>{el?.name}</span> */}

        </div>
        <span className='time d-flex align-items-center'>
          {/* {`${calculateTimeDifferenceInMinutes(HeartRateAvg?.heart_data?.[el?.id]?.date===undefined?"":HeartRateAvg?.heart_data?.[el?.id]?.date)} min ago`} */}
          1 min ago
          <img src='/images/angle-right.svg' alt='Angle Right' />
        </span>
      </div>
      <div className='measurment-result'>
        {/* <span className='digit'>{HeartRateAvg === undefined || el === undefined ?"":HeartRateAvg?.heart_data?.[el?.id]?.count}</span> */}
        <span className='digit'>{latestData?.latest?.blood_oxygen?.count}</span>
        <span className='type'>%</span>
        {/* <span className='type'>{el?.label}</span> */}

      </div>
      <RiskStatusForBloodOxygen/>

    </div>  
    </>
  )
}