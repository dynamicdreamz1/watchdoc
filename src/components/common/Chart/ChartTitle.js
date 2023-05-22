import React from 'react'
import { watchNumerFormeting } from '../../../Utility/functions';
import MonthPickerComponent from '../../common/MonthlyDatePicker';
import DatePickerComponent from '../DailyDatePicker';
import WeekPickerComponent from '../WeeklyDatePicker';


export default function ChartTitle({titleAction,setData}) {

  const {value,HeartData,setFinalDate,dataKey}=titleAction || {}
  // const [state, setState] = useState({ start: "", end: "", label: "" });
  // const { start, end } = state;
  // const labeldaterange = start && end ? start.format("YYYY-MM-DD") + " - " + end.format("YYYY-MM-DD") : "";
  // let defaultDateRange = `${defaultStartDate} - ${defaultEndDate}`;
  // const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  // const defaultEndDate = moment().format('YYYY-MM-DD');

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
        {/* <DatePickerInput ChangeDate={ChangeDate} Date={Date}  /> */}
        {value===0 ? <DatePickerComponent dataClear={dataClear} setFinalDate={setFinalDate} /> :
         value === 1 ? <WeekPickerComponent dataClear={dataClear} setFinalDate={setFinalDate} />:
         value === 2 ? <MonthPickerComponent dataClear={dataClear} setFinalDate={setFinalDate} /> : 
         <DatePickerComponent setFinalDate={setFinalDate} />}
        
        {/* <DateRangePicker
          initialSettings={{
            // startDate: start ? start.toDate() : moment().subtract(29, "days"),
            startDate: start ? start.toDate() : moment(),
            endDate: end ? end.toDate() : moment(),
            locale: {
              format: "Do MMMM YYYY",
            },
            ranges: {
              Today: [moment().toDate(), moment().toDate()],
              Yesterday: [moment().subtract(1, "days").toDate(), moment().subtract(1, "days").toDate()],
              "Last 7 Days": [moment().subtract(6, "days").toDate(), moment().toDate()],
              "Last 30 Days": [moment().subtract(29, "days").toDate(), moment().toDate()],
              "This Month": [moment().startOf("month").toDate(), moment().endOf("month").toDate()],
              "Last Month": [moment().subtract(1, "month").startOf("month").toDate(), moment().subtract(1, "month").endOf("month").toDate()],
            },
          }}
          onCallback={handleCallback}
          // onEvent={handleEvent}
          onCancel={handleCancel}
          minDate={moment()}
          maxDate={moment().add("30 days")}
        >
          <div className="input-group" id="reportrange">
            <input type="text" className="form-control date" value={labeldaterange ? labeldaterange : defaultDateRange} readOnly />
          </div>
        </DateRangePicker> */}

      </div>
    </>
  )
}
