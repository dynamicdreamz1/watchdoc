import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import moment from 'moment';

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
  const { day,setFinalDate, selectedDay, ...other } = props;

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

export default function WeeklyDatePicker({dataClear,setFinalDate}) {
  const [value, setValue] = React.useState(dayjs());
  const handleDateChange = (date) => {
    const firstdate = date?.startOf('week').format('YYYY-MM-DD');
    const lastdate = date?.endOf('week').format('YYYY-MM-DD');
    dataClear()
    setValue(date)
    setFinalDate({ start: firstdate, end: lastdate })
  };

  React.useEffect(()=>{
    const firstdate = value?.startOf('week').format('YYYY-MM-DD');
    const lastdate = value?.endOf('week').format('YYYY-MM-DD');
    setFinalDate({ start: firstdate, end: lastdate })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // maxDate={moment()}
        value={value}
        onChange={(newValue) => handleDateChange(newValue)}
        slots={{ day: Day }}
        slotProps={{
          day: {
            selectedDay: value,
            setFinalDate:setFinalDate
          },
        }}
      />
    </LocalizationProvider>
  );
}