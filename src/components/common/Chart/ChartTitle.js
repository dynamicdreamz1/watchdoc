import React from 'react'
import DatePickerInput from '../Table/DatePickerInput'

export default function ChartTitle() {
  return (
    <>
        <div className='chart-title-block d-flex justify-content-between'>
            <div className='range'>
                <span className='range-text'>Range</span>
                <div className='range-number'>
                    <span className="digit">41-120</span>
                    <span className="type">bpm</span>
                </div>
            </div>
            <DatePickerInput/>
        </div>
    </>
  )
}
