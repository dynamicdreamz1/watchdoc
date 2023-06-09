import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
const ITEM_HEIGHT = 48;

export default function ReminderOptions({handleClickDeleteReminder}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClickDeleteReminder}
            className="dots-icon"
        >
            <CancelIcon />
        </IconButton>
        <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem onClick={handleClose}>Weight</MenuItem>
            <MenuItem onClick={handleClose}>Blood Pressure</MenuItem>
            <MenuItem onClick={handleClose}>Medication</MenuItem>
            <MenuItem onClick={handleClose}>Custom Reminder</MenuItem>
        </Menu>
    </>
  )
}
