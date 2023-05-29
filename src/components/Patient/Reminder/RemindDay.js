import { Dialog } from '@mui/material';
import React from 'react'
import HighHeartrateOverlay from '../../Clinician/Overlays/HighHeartrateOverlay';

export default function RemindDay({reminderDay}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const mon = reminderDay.includes("1");
  const tue = reminderDay.includes("2");
  const wen = reminderDay.includes("3");
  const thu = reminderDay.includes("4");
  const fri = reminderDay.includes("5");
  const sat = reminderDay.includes("6");
  const sun = reminderDay.includes("7");


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className='days'>
        <button type="button" className={mon=== true ? "day active" : "day"} onClick={handleClickOpen}>M</button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className='reminder-overlay'
        >
          <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
          <HighHeartrateOverlay/>
        </Dialog>
        <button type="button" className={tue=== true ? "day active" : "day"}>T</button>
            <button type="button" className={wen=== true ? "day active" : "day"}>W</button>
            <button type="button" className={thu=== true ? "day active" : "day"}>T</button>
            <button type="button" className={fri=== true ? "day active" : "day"}>F</button>
            <button type="button" className={sat=== true ? "day active" : "day"}>S</button>
            <button type="button" className={sun=== true ? "day active" : "day"}>S</button>        
    </div>
    </>
  )
}
