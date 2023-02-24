import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function ClinicianSidebar() {
  return (
    <>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <img src='/images/Dashboard-icon.svg' alt='Dashboard Icon' />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <img src='/images/User-icon.svg' alt='User Icon' />
                </ListItemIcon>
                <ListItemText>Patients</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <img src='/images/Clinicians-icon.svg' alt='Clinicians Icon' />
                </ListItemIcon>
                <ListItemText>Clinisians</ListItemText>
            </ListItemButton>
        </ListItem>
    </List>
    </>
  )
}
