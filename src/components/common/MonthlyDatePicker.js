import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export default function DatePickerComponent({setFinalDate}) {
  const [selectedDate, setSelectedDate] = useState(moment());

  const handleDateChange = (date) => {
    setSelectedDate(date)
    const firstdate = moment(date).startOf('month').format('YYYY-MM-DD');
    const lastdate=moment(date).endOf('month').format("YYYY-MM-DD"); 
    setFinalDate({ start: firstdate, end: lastdate })
  };

  useEffect(()=>{
    const firstdate = selectedDate.startOf('month').format('YYYY-MM-DD');
    const lastdate = selectedDate.endOf('month').format('YYYY-MM-DD');
    setFinalDate({ start: firstdate, end: lastdate })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
       <DatePicker
        openTo="month"
          views={['year','month']}
          label="Month"
          value={selectedDate}
          onChange={(newValue) => {
            handleDateChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
  );
}   
