import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import dayjs from 'dayjs';

export default function DatePickerComponent({ setFinalDate, dataClear }) {
  const [selectedDate, setSelectedDate] = useState(moment()); 

  const handleDateChange = (date) => {
    if (date === null) {
      setSelectedDate(null);
      return;
    }
    dataClear();
    setSelectedDate(date);
    setFinalDate({ start: date.format("YYYY-MM-DD"), end: date.format("YYYY-MM-DD") });
  };

  useEffect(() => {
    if (setFinalDate !== undefined) {
      setFinalDate({ start: moment().format("YYYY-MM-DD"), end: moment().format("YYYY-MM-DD") });
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        maxDate={moment()}
        value={selectedDate}
        onChange={(newValue) => handleDateChange(newValue)}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
}
