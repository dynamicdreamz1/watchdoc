import { Dialog } from '@mui/material';
import React from 'react'
import HighHeartrateOverlay from '../../Clinician/Overlays/HighHeartrateOverlay';

export default function RemindDay() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className='days'>
        <button type="button" className='day' onClick={handleClickOpen}>M</button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className='reminder-overlay'
        >
          <HighHeartrateOverlay/>
        </Dialog>
        <button type="button" className='day'>T</button>
        <button type="button" className='day active'>W</button>
        <button type="button" className='day'>T</button>
        <button type="button" className='day'>F</button>
        <button type="button" className='day'>S</button>
        <button type="button" className='day'>S</button>
    </div>
    </>
  )
}
