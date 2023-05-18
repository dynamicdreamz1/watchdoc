import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export default function DatePickerComponent(props) {
  const {setFinalDate}=props
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const handleDateChange = (date) => {
    setSelectedDate(date)
    setFinalDate({ start: date.format("YYYY-MM-DD") ,end: date.format("YYYY-MM-DD")})
  };

  useEffect(()=>{
   if(setFinalDate !== undefined){
    setFinalDate({ start: selectedDate, end: selectedDate })
   }
     // eslint-disable-next-line react-hooks/exhaustive-deps

  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => handleDateChange(newValue)}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
}
