import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PatientSidebar() {
  return (
    <>
    <List>
        <Link to="/dashboard">
        <ListItem disablePadding>

            <ListItemButton>
                <ListItemIcon>
                    <img src='/images/Dashboard-icon.svg' alt='Dashboard Icon' />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/addclinician">
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <img src='/images/Clinicians-icon.svg' alt='User Icon' />
                </ListItemIcon>
                <ListItemText>Add Clinician</ListItemText>
            </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/editprofile">
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <img src='/images/EditProfileIcon.png' alt='Edit Profile Icon' />
                    </ListItemIcon>
                    <ListItemText>Edit Profile</ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
        <Link to="/link-device">
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <img src='/images/ConnectDeviceIcon.png' alt='Connect Device Icon' />
                    </ListItemIcon>
                    <ListItemText>Link Device</ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
    </List>
    </>
  )
}
