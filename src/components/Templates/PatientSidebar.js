import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function PatientSidebar() {
    return (
        <>
            <List>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }>
                        <ListItem disablePadding  >

                            <ListItemButton >
                                <ListItemIcon>
                                    <img src='/images/Dashboard-icon.svg' alt='Dashboard Icon' />
                                </ListItemIcon>
                                <ListItemText  >Dashboard</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink
                        to="/editclinician"
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }>
               
              
                    <ListItem disablePadding>
                        <ListItemButton className='patient-dashboard'>
                            <ListItemIcon>
                                <img src='/images/Clinicians-icon.svg' alt='User Icon' />
                            </ListItemIcon>
                            <ListItemText>Add Clinician</ListItemText>
                        </ListItemButton>
                    </ListItem>
             
                </NavLink>

                <NavLink
                        to="/edit-profile"
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }>
          
                    <ListItem disablePadding>
                        <ListItemButton className='patient-dashboard'>
                            <ListItemIcon>
                                <img src='/images/EditProfileIcon.png' alt='Edit Profile Icon' />
                            </ListItemIcon>
                            <ListItemText>Edit Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
            
                </NavLink>

                <NavLink
                        to="/editlinkdevice"
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }>
               
                    <ListItem disablePadding>
                        <ListItemButton className='patient-dashboard'>
                            <ListItemIcon>
                                <img src='/images/ConnectDeviceIcon.png' alt='Connect Device Icon' />
                            </ListItemIcon>
                            <ListItemText>Link Device</ListItemText>
                        </ListItemButton>
                    </ListItem>
           
                </NavLink>
            </List>
        </>
    )
}
