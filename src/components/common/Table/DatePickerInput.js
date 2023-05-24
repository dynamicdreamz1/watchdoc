import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react'

export default function DatePickerInput({Date, ChangeDate}) {

      
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
            className='date-picker'
            label=""
            value={Date}
            onChange={ChangeDate}
            disableFuture={true}
            renderInput={(params) => <TextField {...params} />}
        /> */}
        </LocalizationProvider>
        </>
    )
}
