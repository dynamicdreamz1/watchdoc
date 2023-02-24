import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function PatientSidebar() {
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
                    <img src='/images/Add-rounded-button.svg' alt='User Icon' />
                </ListItemIcon>
                <ListItemText>Add Clinician</ListItemText>
            </ListItemButton>
        </ListItem>
    </List>
    </>
  )
}
