import React from 'react'
import DatePickerInput from '../Table/DatePickerInput'

export default function ChartTitle({Date,HeartData ,ChangeDate}) {
  return (
    <>
        <div className='chart-title-block d-flex justify-content-between'>
            <div className='range'>
                <span className='range-text'>Range</span>
                <div className='range-number'>
                <span className="digit">
                  {`${HeartData?.min_hr_bpm===undefined?"35":HeartData?.min_hr_bpm}-${HeartData?.min_hr_bpm===undefined?"102":HeartData?.min_hr_bpm}`}
                  
                  </span>
                    <span className="type">bpm</span>
                </div>
            </div>
            <DatePickerInput ChangeDate={ChangeDate} Date={Date}  />
        </div>
    </>
  )
}
