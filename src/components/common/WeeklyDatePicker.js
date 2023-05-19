import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


export default function WeekPickerComponent({setHeartRateValue, setFinalDate }) {



  const [date, setDate] = useState({
    startWeekDate: moment().startOf('week').day(0),
    endWeekDate: moment().endOf('week').day(6)
  });
  const [focus, setFocus] = useState(null);


  const handleDatesChange = ({ startDate }) => {
    setHeartRateValue()
    const selectedDate = moment(startDate);
    const startOfWeek = selectedDate.clone().add(1, 'week').startOf('week').day(0);
    const endOfWeek = selectedDate.clone().add(1, 'week').startOf('week').day(6);

    if (startOfWeek && endOfWeek) {
      setFocus(null);
    } else if (startOfWeek) {
      setFocus('endDate');
    } else {
      setFocus('startDate');
    }

    const firstdate = moment(startOfWeek, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
    const lastdate = moment(endOfWeek, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
    
    setFinalDate({ start: firstdate, end: lastdate })

    setDate({
      startWeekDate: startOfWeek,
      endWeekDate: endOfWeek
    });



  };



  const handleFocusChange = (focusedInput) => {
    setFocus(focusedInput);
  };



  useEffect(()=>{ 
    const firstdate = moment(date?.startWeekDate, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
    const lastdate = moment(date?.endWeekDate, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");    
    setFinalDate({ start: firstdate, end: lastdate })

     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])





  return (


    <div>
      <DateRangePicker
        startDate={date.startWeekDate}
        endDate={date.endWeekDate}
        focusedInput={focus}
        onDatesChange={handleDatesChange}
        onFocusChange={handleFocusChange}
        startDateOffset={(day) => day.subtract(3, 'days')}
        endDateOffset={(day) => day.add(3, 'days')}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
}
