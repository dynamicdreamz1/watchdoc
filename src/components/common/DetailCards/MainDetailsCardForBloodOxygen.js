import React from 'react'
import RiskStatusForBloodOxygen from './RiskStatusForBloodOxygen';
import { GetdayHourMin, convertDecimalToPercentage } from '../../../Utility/functions';

export default function MainDetailsCardForBloodOxygen({ titleAction }) {
  const { bloodOxygenData, latestData } = titleAction
  const date = GetdayHourMin(latestData?.latest?.blood_oxygen?.date)
  const bloodOxygen = parseInt(bloodOxygenData?.data?.blood_oxygen?.avg_saturation_percentage)

  const result = typeof bloodOxygen === 'number' ? bloodOxygen % 1 !== 0 ? convertDecimalToPercentage(bloodOxygen, 0) : bloodOxygen
    : 0;

    

  return (
    <>
      <div className='chart-details-card'>
        <div className='title d-flex justify-content-between'>
          <div className='measurment-title d-flex align-items-center'>
            <span className='icon d-flex'><img src={`/images/blood-oxygen-icon.svg`} alt='Blood Oxygen Icon' /></span>
            <span className='name d-flex'>Latest Blood Oxygen</span>
          </div>
          <span className='time d-flex align-items-center'>
            {date?.data} {date?.lable} ago
            <img src='/images/angle-right.svg' alt='Angle Right' />
          </span>
        </div>
        <div className='measurment-result'>
          <span className='digit'>{result}</span>
          <span className='type'>%</span>
        </div>
        <RiskStatusForBloodOxygen />
      </div>
    </>
  )
}
