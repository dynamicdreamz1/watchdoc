import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function AdminSidebar() {
    const location=useLocation();

    return (
        <>
            <List>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "isActive" : ""
                    }>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src='/images/Dashboard-icon.svg' alt='Dashboard Icon' />
                            </ListItemIcon>
                            <ListItemText className='clinician'>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink
                    to="/adminpatient"
                    className={({ isActive }) =>
                        isActive || location.pathname==="/patientdetails"? "isActive" : ""
                    }>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src='/images/User-icon.svg' alt='User Icon' />
                            </ListItemIcon>
                            <ListItemText>Patients</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink
                    to="/clinicians"
                    className={({ isActive }) =>
                        isActive || location.pathname==="/cliniciandetails"? "isActive" : ""
                    }>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src='/images/Clinicians-icon.svg' alt='Clinicians Icon' />
                            </ListItemIcon>
                            <ListItemText>Clinicians</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink
                    to="/staffusers"
                    className={({ isActive }) =>
                        isActive ? "isActive" : ""
                    }>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src='/images/Staff_user.svg' alt='Staff User Icon' />
                            </ListItemIcon>
                            <ListItemText>Staff Users</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
        </>
    )
}
