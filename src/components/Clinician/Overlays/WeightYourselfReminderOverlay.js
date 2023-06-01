import React, { useEffect, useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { StoreReminderData } from '../../../services/ClinicianService';
import {day} from "../../../Utility/commonConstant"
import dayjs from 'dayjs';
import { toast } from 'react-toastify';



export default function WeightYourselfReminderOverlay({actionReminderDay}) {
  const {filterDay,reminderType,latestData,setOpen,fetchData,setOpenReminder}=actionReminderDay
  const [checked, setChecked] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleTimeChange = (date) => {
    setSelectedDate(date);
    
  };

  const extractTimeData = (date) => {
    if (date) {
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
    }

    return null;
  };

useEffect(()=>{
  if(filterDay!==undefined){
  setChecked(filterDay)
  }
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

  

  const handleClickAddReminder=async()=>{
    const timeData = extractTimeData(selectedDate);

    const remindertypevalue=reminderType==='medication'?3:reminderType==='weight'?1:reminderType==='blood_pressure'?2:reminderType==='custome'?4:''
    const formData = new FormData();
    formData.append('user_id', latestData?.user_data?.id)  
    formData.append('reminder_id', remindertypevalue)  
    formData.append('time', timeData?.time)  
    formData.append('time_in_hour', timeData?.time_in_hour)  
    formData.append('time_in_mint', timeData?.time_in_mint)  
    formData.append('time_am_pm', timeData?.time_am_pm)  
    formData.append('day', checked)  
    formData.append('time_zone', timeData?.time_zone)  
    const res=await StoreReminderData(formData)
    setOpen(false)
    if (res?.status === 200) {
      setOpenReminder(false)
      await fetchData()
      toast.success(res?.data?.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  }

  return (
    <>
      <div className='high-heart-rate'>
        <div className='dialog-title'>
          <h2>{reminderType?reminderType:""} Yourself</h2>
          <p>We recommend you {reminderType?reminderType:""} yourself between two and seven times a week in the morning before breakfast.</p>
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
    </LocalizationProvider>      
    <div className='clock-title'>
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


// import * as React from 'react';
// import { useTheme } from '@mui/material/styles'
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import {AccordionDetails ,Typography,AccordionSummary ,Checkbox, ListItem, ListItemButton,Accordion,InputLabel,FormControl,styled} from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
// import dayjs from 'dayjs';
// import {day} from "../../../Utility/commonConstant"


// const AccordionData = styled((props) => (
//   <Accordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummaryData = styled((props) => (
//   <AccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .AccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .AccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetailsData = styled(AccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));


// export default function MultipleSelectChip() {
//   const theme = useTheme();
//   const [expanded, setExpanded] = React.useState('panel1');
//   const [selectedDate, setSelectedDate] = React.useState(dayjs());
//   const [checked, setChecked] = React.useState([]);

//     const handleTimeChange = (date) => {
//       setSelectedDate(date);
      
//     };

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-chip-label"></InputLabel>
//         <div>
//       {day?.map((value) => {
//         const labelId = `checkbox-list-secondary-label-${value.id}`;
//         return (
//           <ListItem
//             key={value.id}
//             secondaryAction={
//               <Checkbox
//                 edge="end"
//                 // onChange={handleToggle(value.id)}
//                 checked={checked.indexOf(value.id) !== -1}
//                 inputProps={{ 'aria-labelledby': labelId }}
//                 className="Every Monday"
//               />
//             }
//             disablePadding
//           >
//             <ListItemButton>
//               <div className='radio-item'>
//               {/* <label htmlFor="monday">Every {value.day}</label> */}
                              
//               <AccordionData  onChange={handleChange('panel1')}>
//                 <AccordionSummaryData aria-controls="panel1d-content" id="panel1d-header">
//                   <Typography>Every {value.day}</Typography>
//                 </AccordionSummaryData>
//                 <AccordionDetailsData>
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <TimePicker
//                     label="Basic time picker"
//                     value={selectedDate}
//                     onChange={handleTimeChange}
//                   />
//                 </LocalizationProvider> 
//                 </AccordionDetailsData>
//               </AccordionData>
//             </div>
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </div>
//       </FormControl>
//     </div>
//   );
// }