import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Sidebar() {

    const {t}=useTranslation();

  return (
    <>
    <div className='sidebar'>
        <div className='logo'>
            <img src='images/WatchDoc-text-logo.svg' alt='WatchDoc Logo' />
        </div>
        <nav aria-label="main mailbox folders">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src='/images/Dashboard-icon.svg' alt='Dashboard Icon' />
                        </ListItemIcon>
                        <ListItemText primary={t('DashboardPage.SideBar.d1')} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src='/images/User-icon.svg' alt='User Icon' />
                        </ListItemIcon>
                        <ListItemText primary={t('DashboardPage.SideBar.d2')} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src='/images/Clinicians-icon.svg' alt='Clinicians Icon' />
                        </ListItemIcon>
                        <ListItemText primary={t('DashboardPage.SideBar.d3')} />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </div>
    </>
  )
}
