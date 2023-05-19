import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


export default function WeekPickerComponent({ setFinalDate }) {



  const [date, setDate] = useState({
    startWeekDate: moment().startOf('week').day(0),
    endWeekDate: moment().endOf('week').day(6)
  });
  const [focus, setFocus] = useState(null);


  const handleDatesChange = ({ startDate }) => {
    const selectedDate = moment(startDate);

    const startOfWeek = selectedDate.clone().subtract(1, 'week').startOf('week').day(0);
    const endOfWeek = selectedDate.clone().subtract(1, 'week').endOf('week').day(6);

    setDate({
      startWeekDate: startOfWeek,
      endWeekDate: endOfWeek
    });

    if (startOfWeek && endOfWeek) {
      setFocus(null);
    } else if (startOfWeek) {
      setFocus('endDate');
    } else {
      setFocus('startDate');
    }



  };



  const handleFocusChange = (focusedInput) => {
    setFocus(focusedInput);
  };


  console.log("11111-date", date)





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
