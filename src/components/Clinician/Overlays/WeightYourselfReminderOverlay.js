import React, { useEffect } from 'react'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';


export default function WeightYourselfReminderOverlay({filterDay}) {
  // const [selectedValue, setSelectedValue] = useState(filterDay);
  const [checked, setChecked] = React.useState([]);

useEffect(()=>{
  if(filterDay!==undefined){
  setChecked(filterDay)
  }
},filterDay)
 
console.log("1111-checked",filterDay,checked)

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

  const handleClickAddReminder=()=>{}



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
          <TimePicker label="Basic time picker" />
          </LocalizationProvider>          <div className='clock-title'>
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
