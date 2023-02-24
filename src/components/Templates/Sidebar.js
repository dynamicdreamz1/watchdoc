import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { logout } from '../../services/UserService';


export default function Sidebar() {

    const {t}=useTranslation();

    const logoutHandel=()=>{
        logout();
        window.location.reload();
    }

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
        <div className='logout'>
            <button type='button' onClick={(e)=>logoutHandel()} >
                <span className='icon'>
                    <img src='/images/Logout-icon.png' alt='Logout Icon' />
                </span>
                <span className='text'>Logout</span>
            </button>
        </div>
    </div>
    </>
  )
}
