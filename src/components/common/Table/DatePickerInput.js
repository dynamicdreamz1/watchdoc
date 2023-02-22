import { TextField } from '@mui/material';
import React from 'react'

export default function DatePickerInput() {

    const [value, setValue] = React.useState(null);
    
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Basic example"
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
