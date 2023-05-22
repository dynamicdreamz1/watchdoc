// import React, { useEffect, useState } from 'react';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';


// export default function WeekPickerComponent({dataClear, setFinalDate }) {
//   const [date, setDate] = useState({
//     startWeekDate: moment().startOf('week').day(0),
//     endWeekDate: moment().endOf('week').day(6)
//   });
//   const [focus, setFocus] = useState(null);

//   const handleDatesChange = ({ startDate }) => {
//     dataClear()
//     const selectedDate = moment(startDate);
//     const startOfWeek = selectedDate.clone().add(1, 'week').startOf('week').day(0);
//     const endOfWeek = selectedDate.clone().add(1, 'week').startOf('week').day(6);

//     if (startOfWeek && endOfWeek) {
//       setFocus(null);
//     } else if (startOfWeek) {
//       setFocus('endDate');
//     } else {
//       setFocus('startDate');
//     }

//     const firstdate = moment(startOfWeek, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
//     const lastdate = moment(endOfWeek, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
    
//     setFinalDate({ start: firstdate, end: lastdate })

//     setDate({
//       startWeekDate: startOfWeek,
//       endWeekDate: endOfWeek
//     });
//   };

//   const handleFocusChange = (focusedInput) => {
//     setFocus(focusedInput);
//   };

//   useEffect(()=>{ 
//     const firstdate = moment(date?.startWeekDate, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");
//     const lastdate = moment(date?.endWeekDate, "ddd MMM DD YYYY HH:mm:ss [GMT] Z").format("YYYY-MM-DD");    
//     setFinalDate({ start: firstdate, end: lastdate })

//      // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
//   return (

//     <div>
//       <DateRangePicker
//        startDateId="startDateId"
//        endDateId="endDateId"
//         startDate={date.startWeekDate}
//         endDate={date.endWeekDate}
//         focusedInput={focus}
//         onDatesChange={handleDatesChange}
//         onFocusChange={handleFocusChange}
//         startDateOffset={(day) => day.subtract(3, 'days')}
//         endDateOffset={(day) => day.add(3, 'days')}
//         numberOfMonths={1}
//         isOutsideRange={() => false}
//       />
//     </div>
//   );
// }



import React, { useState } from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, PickersDay } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

function Day(props) {
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf('week');
  const end = selectedDay.endOf('week');

  const dayIsBetween = day.isBetween(start, end, null, '[]');
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

export default function CustomDay() {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
  value={value}
  onChange={(newValue) => setValue(newValue)}
  renderDay={Day}
  renderInput={(props) => <TextField {...props} />}
/>

    </LocalizationProvider>
  );
}
