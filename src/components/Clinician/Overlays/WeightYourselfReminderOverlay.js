import React, { useEffect, useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { StoreReminderData } from '../../../services/ClinicianService';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';


export default function WeightYourselfReminderOverlay({ actionReminderDay }) {
  const { setOpenReminder, fetchData, filterDay, reminderType, latestData, setOpen } = actionReminderDay
  const [checked, setChecked] = useState((!Array.isArray(filterDay) || filterDay.length === 0) ? [] : filterDay);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleTimeChange = (date) => {
    setSelectedDate(date || dayjs());


  };




  const extractTimeData = (date) => {
    if (!date) {
      date = new Date();
    }

    const time = dayjs(date).format('hh:mm A');
    let time_in_hour = dayjs(date).hour();
    const time_in_mint = dayjs(date).minute();
    const time_am_pm = dayjs(date).format('A');
    const time_zone = dayjs(date).format('Z');

    if (time_in_hour > 12) {
      time_in_hour -= 12;
    }

    return {
      time,
      time_in_hour,
      time_in_mint,
      time_am_pm,
      time_zone,
    };


  };







  useEffect(() => {
    (!Array.isArray(filterDay) || filterDay.length === 0) ?
      setChecked([])
      :
      setChecked(filterDay)
  }, [filterDay])


  const handleToggle = (value) => () => {
    const currentIndex = checked?.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  const day = [
    {
      id: 1,
      day: "Monday"
    },
    {
      id: 2,
      day: "Tuesday"
    },
    {
      id: 3,
      day: "Wednesday"
    },
    {
      id: 4,
      day: "Thursday"
    },
    {
      id: 5,
      day: "Friday"
    },
    {
      id: 6,
      day: "Saturday"
    },
    {
      id: 7,
      day: "Sunday"
    }
  ]


  const handleClickAddReminder = async () => {
    const timeData = extractTimeData(selectedDate);

    let dayArray = checked;
    if (!Array.isArray(dayArray) || dayArray.length === 0) {
      dayArray = [];
    }
    const formData = new FormData();
    const remindertypevalue = reminderType === 'medication' ? 3 : reminderType === 'weight' ? 1 : reminderType === 'blood_pressure' ? 2 : reminderType === 'custome' ? 4 : ''
    formData.append('user_id', latestData?.user_data?.id);
    formData.append('reminder_id', remindertypevalue)
    formData.append('day', dayArray)
    formData.append('time', timeData?.time)
    formData.append('time_in_hour', timeData?.time_in_hour)
    formData.append('time_in_mint', timeData?.time_in_mint)
    formData.append('time_am_pm', timeData?.time_am_pm)
    formData.append('time_zone', timeData?.time_zone)
    const res = await StoreReminderData(formData)
    setOpen(false)
    if (res?.status === 200) {
      toast.success(res?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: "",
        theme: "colored",
        });
      setOpenReminder(false)
      fetchData()
    }
   

  }

  return (
    <>
      <div className='high-heart-rate'>
        <div className='dialog-title'>
          <h2>{reminderType ? reminderType : ""} Yourself</h2>
          <p>We recommend you weigh yourself between two and seven times a week in the morning before breakfast.</p>
        </div>
        <form>
          <div className='clock-title'>
            <img src='/images/clock-icon.svg' alt="Click Icon" />
            <span className='days-data'>Time</span>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Basic time picker"
              value={selectedDate}
              onChange={handleTimeChange}
            />
          </LocalizationProvider>      <div className='clock-title'>
            <img src='/images/clock-icon.svg' alt="Click Icon" />
            <span className='days-data'>Days</span>
          </div>


          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {day?.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.id}`;
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value.id)}
                      checked={checked.indexOf(value.id) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                      className="Every Monday"
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <div className='radio-item'>
                      <label htmlFor="monday">Every {value.day}</label>
                    </div>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <div className='submit-block'>
            <button type='button' className="btn" onClick={handleClickAddReminder}>Add Reminder</button>
          </div>
        </form>
      </div>
    </>
  )
}
