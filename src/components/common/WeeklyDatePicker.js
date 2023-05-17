import * as React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function WeekPickerComponent() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    const newEndDate = dayjs(date).add(6, 'day').toDate(); // Calculate new end date based on selected start date
    if (dayjs(newEndDate).month() === dayjs(date).month()) {
      setEndDate(newEndDate);
    } else {
      setEndDate(dayjs(date).endOf('month').toDate()); // Set end date to the last day of the month if it's in a different month
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setStartDate(dayjs(date).subtract(6, 'day').toDate()); // Automatically set the start date as 6 days before the end date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={handleStartDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={handleEndDateChange}
        renderInput={(params) => (
          <TextField
            {...params}
            readOnly={!startDate} // Disable the input field when no start date is selected
          />
        )}
        minDate={startDate} // Set minimum date as the selected start date
        maxDate={dayjs(startDate).add(6, 'day').toDate()} // Set maximum date as 6 days ahead of the selected start date
        disabled // Disable the end date field if no start date is selected
      />
    </LocalizationProvider>
  );
}
