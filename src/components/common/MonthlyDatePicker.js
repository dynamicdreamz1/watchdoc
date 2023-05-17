import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // console.log("111111111-selectedDate", selectedDate)

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
       <DatePicker
          views={['month']}
          label="Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
  );
}   
