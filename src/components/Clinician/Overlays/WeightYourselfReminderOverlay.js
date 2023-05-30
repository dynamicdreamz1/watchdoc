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


export default function WeightYourselfReminderOverlay({fetchData,filterDay,reminderType,latestData,setOpen}) {
  // const [selectedValue, setSelectedValue] = useState(filterDay);
  const [checked, setChecked] = useState((!Array.isArray(filterDay) || filterDay.length === 0)?[]:filterDay);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleTimeChange = (date) => {
    setSelectedDate(date || dayjs());

    
  };




  const extractTimeData = (date) => {
    if (!date) {
      date = new Date(); // Set date to current date if it is undefined
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







useEffect(()=>{ 
  (!Array.isArray(filterDay) || filterDay.length === 0)?
  setChecked([])
  :
  setChecked(filterDay)
},[filterDay])
 

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

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   if (e.target.checked) {
  //     setSelectedValue((prevSelectedValues) => [...prevSelectedValues, value]);
  //   } else {
  //     setSelectedValue((prevSelectedValues) =>
  //       prevSelectedValues.filter((v) => v !== value)
  //     );
  //   }
  // };

  const day = [
    {
      id :1,
      day : "Monday"
    },
    {
      id :2,
      day : "Tuesday"
    },
    {
      id :3,
      day : "Wednesday"
    },
    {
      id :4,
      day : "Thursday"
    },
    {
      id :5,
      day : "Friday"
    },
    {
      id :6,
      day : "Saturday"
    },
    {
      id :7,
      day : "Sunday"
    }
]
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   setSelectedValue((prevSelectedValues) =>
  //     prevSelectedValues.filter((v) => v !== value)
  //   );
  // };

  const handleClickAddReminder=async()=>{
    const timeData = extractTimeData(selectedDate);

    let dayArray = checked;
    if (!Array.isArray(dayArray) || dayArray.length === 0) {
      dayArray = []; 
    }
    const formData = new FormData();
    const remindertypevalue=reminderType==='medication'?1:reminderType==='weight'?2:reminderType==='blood_pressure'?3:reminderType==='custome'?4:''
    formData.append('user_id', latestData?.user_data?.id); 
    formData.append('reminder_id', remindertypevalue)
    formData.append('day', dayArray)
    formData.append('time', timeData?.time)
    formData.append('time_in_hour', timeData?.time_in_hour)
    formData.append('time_in_mint', timeData?.time_in_mint)
    formData.append('time_am_pm', timeData?.time_am_pm)
    formData.append('time_zone', timeData?.time_zone)
    const res=await StoreReminderData(formData)
    setOpen(false)
    if(res?.status===200){
      fetchData()
    }


  }
console.log("111-checked-",checked)

  return (
    <>
      <div className='high-heart-rate'>
        <div className='dialog-title'>
          <h2>Weigh Yourself</h2>
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
              {/* <ListItemText id={labelId} primary={`Every ${value.id.day}`} /> */}
              <div className='radio-item'>
              {/* <input className={selectedValue.includes('Every Monday')?'checked':""} type="radio" id="monday" name="day" value.id="Every Monday" checked={selectedValue.includes('Every Monday')} onChange={handleChange} onClick={handleClick} /> */}
              <label htmlFor="monday">Every {value.day}</label>
            </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
          {/* <div className='radios-wrapper'>
            <div className='radio-item'>
              <input className={selectedValue.includes('1')?'checked':""} type="radio" id="monday" name="day" value="1" checked={selectedValue.includes('1')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="monday">Every Monday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('2')?'checked':""} type="radio" id="tuesday" name="day" value="2" checked={selectedValue.includes('2')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="tuesday">Every Tuesday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('3')?'checked':""} type="radio" id="wednesday" name="day" value="3" checked={selectedValue.includes('3')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="wednesday">Every Wednesday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('4')?'checked':""} type="radio" id="thursday" name="day" value="4" checked={selectedValue.includes('4')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="thursday">Every Thursday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('5')?'checked':""} type="radio" id="friday" name="day" value="5" checked={selectedValue.includes('5')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="friday">Every Friday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('6')?'checked':""} type="radio" id="saturday" name="day" value="6" checked={selectedValue.includes('6')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="saturday">Every Saturday</label>
            </div>
            <div className='radio-item'>
              <input className={selectedValue.includes('7')?'checked':""} type="radio" id="sunday" name="day" value="7" checked={selectedValue.includes('7')} onChange={handleChange} onClick={handleClick} />
              <label htmlFor="sunday">Every Sunday</label>
            </div>
          </div> */}
          <div className='submit-block'>
            <button type='button' className="btn" onClick={handleClickAddReminder}>Add Reminder</button>
          </div>
        </form>
      </div>
    </>
  )
}
