import React from 'react'
import MeasurmentStatus from './MeasurmentStatus';
import MeasurmentTitle from '../../patients/MeasurmentTitle';
import MeasurmentResult from './MeasurmentResult';
import MeasurmentLastRecording from '../Patient/MeasurmentLastRecording';

export default function MeasurmentCard() {
  return (
    <>
        <div className='measurment-card'>
            <MeasurmentStatus/>
            <MeasurmentTitle/>
            <MeasurmentResult/>
            <MeasurmentLastRecording/>
        </div>
    </>
  )
}
