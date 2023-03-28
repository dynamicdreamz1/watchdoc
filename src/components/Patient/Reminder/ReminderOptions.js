import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

export default function ReminderOptions() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
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
            onClick={handleClick}
            className="dots-icon"
        >
            <MoreVertIcon />
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
