import React from 'react'
import { watchNumerFormeting } from '../../../Utility/functions';
import MonthPickerComponent from '../../common/MonthlyDatePicker';
import DatePickerComponent from '../DailyDatePicker';
import WeekPickerComponent from '../WeeklyDatePicker';


export default function ChartTitle({titleAction,setData}) {
  const {value,HeartData,setFinalDate,dataKey}=titleAction || {}

  const dataClear =()=>{
    setData()
  }
  
  const finalData =
    dataKey === "bloodOxygen"
      ? HeartData?.avg_saturation_percentage
        ? watchNumerFormeting(HeartData.avg_saturation_percentage)
        : ""
      : dataKey === "heartrate"
        ? HeartData?.min_hr_bpm && HeartData?.max_hr_bpm
          ? `${HeartData.min_hr_bpm}-${HeartData.max_hr_bpm}`
          : ""
        : dataKey === "bloodPressure"
          ? HeartData?.min_hr_bpm && HeartData?.max_hr_bpm
            ? `${HeartData.min_hr_bpm}-${HeartData.max_hr_bpm}`
            : ""
          : "";
  
  return (
    <>
      <div className='chart-title-block d-flex justify-content-between'>
        <div className='range'>
          <span className='range-text'>{finalData ?'Range':''}</span>
          <div className='range-number'>
            <span className="digit">
              {finalData}
            </span>
            <span className="type">{finalData &&( dataKey === "heartrate" ?'bpm': dataKey === "bloodOxygen"?'%': dataKey === "bloodPressure"?"":"")}</span>
          </div>
        </div>
        {value===0 ? <DatePickerComponent dataClear={dataClear} setFinalDate={setFinalDate} /> :
         value === 1 ? <WeekPickerComponent dataClear={dataClear} setFinalDate={setFinalDate} />:
         value === 2 ? <MonthPickerComponent dataClear={dataClear} setFinalDate={setFinalDate} /> : 
         <DatePickerComponent setFinalDate={setFinalDate} />}
      </div>
    </>
  )
}
