import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/ClinicianSidebar.css'

export default function ClinicianSidebar() {
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
                    to="/patients"
                    className={({ isActive }) =>
                        isActive ? "isActive" : ""
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
                        isActive ? "isActive" : ""
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
            </List>
        </>
    )
}
