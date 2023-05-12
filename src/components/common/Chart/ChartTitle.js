import React,{useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from 'moment';



export default function ChartTitle({HeartData,setFinalDate,dataKey}) { 
  const [state, setState] = useState({ start: "", end: "", label: "" });
  const { start, end} = state;
  const labeldaterange = start && end ? start.format("YYYY-MM-DD") + " - " + end.format("YYYY-MM-DD") : "";
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const defaultEndDate = moment().format('YYYY-MM-DD');
  let defaultDateRange = `${defaultStartDate} - ${defaultEndDate}`;



  const handleCancel = () => {
    setState({ start: "", end: "" });
  };

  const handleCallback = (start, end, label) => {
    setFinalDate({start:start.format("YYYY-MM-DD"),end:end.format("YYYY-MM-DD")})
    setState({ start, end, label });
  };

const finalData=dataKey==="bloodOxygen"?HeartData?.avg_saturation_percentage:
dataKey==="heartrate"?`${HeartData?.min_hr_bpm===(null || undefined)?"35":HeartData?.min_hr_bpm}-${HeartData?.max_hr_bpm===(null||undefined)?"102":HeartData?.max_hr_bpm}`:
dataKey==="bloodPressure"?`${HeartData?.min_hr_bpm===(null || undefined)?"35":HeartData?.min_hr_bpm}-${HeartData?.max_hr_bpm===(null||undefined)?"102":HeartData?.max_hr_bpm}`
:""

  return (
    <>
        <div className='chart-title-block d-flex justify-content-between'>
            <div className='range'>
                <span className='range-text'>Range</span>
                <div className='range-number'>
                <span className="digit">
                  {/* {`${HeartData?.min_hr_bpm===(null || undefined)?"35":HeartData?.min_hr_bpm}-${HeartData?.max_hr_bpm===(null||undefined)?"102":HeartData?.max_hr_bpm}`} */}
                 {finalData} 
                  </span>
                    <span className="type">bpm</span>
                </div>
            </div>
            {/* <DatePickerInput ChangeDate={ChangeDate} Date={Date}  /> */}

            <DateRangePicker
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
                      <input type="text" className="form-control date" value={labeldaterange?labeldaterange:defaultDateRange} readOnly />
                    </div>
                  </DateRangePicker>
            
        </div>
    </>
  )
}
