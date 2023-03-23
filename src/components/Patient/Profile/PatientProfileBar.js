import { Button, Dialog } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import PhoneNumber from '../../common/PhoneNumber'
function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <h2>Profile</h2>
      </Dialog>
    );
  }
  
SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function PatientProfileBar() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };
    
    return (
    <>
    <div className='patient-profile-bar'>
        <div className='left-block'>
            <div className='patient-info'>
                <span className="fname">Dr Sarah McDonnell</span>
                <span className="age">46 Years, Male</span>
            </div>
        </div>
        <div className='center-block'>
            <PhoneNumber/>
        </div>
        <div className='right-block'>
            <Button variant="contained" onClick={handleClickOpen}>Profile</Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
            <Button variant="contained">Clincians</Button>
            <Button variant="contained">Emergency Contacts</Button>
        </div>
    </div>
    </>
  )
}
