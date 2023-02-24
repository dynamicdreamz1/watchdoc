import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react'

export default function DatePickerInput() {

    const [value, setValue] = React.useState(null);
    
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            className='date-picker'
            label=""
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </>
    )
}
