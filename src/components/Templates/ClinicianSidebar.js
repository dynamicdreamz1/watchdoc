import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import '../../css/ClinicianSidebar.css'

export default function ClinicianSidebar() {

    const {t}=useTranslation()

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
                            <ListItemText className='clinician'> {t('DashboardPage.SideBar.ClinicianSideBar.t1')} </ListItemText>
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
                        <ListItemText> {t('DashboardPage.SideBar.ClinicianSideBar.t2')} </ListItemText>
                    </ListItemButton>
                </ListItem>
                </NavLink>

                <NavLink
                    to="/profile-settings"
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

                {/* <NavLink
                    to="/clinicians"
                    className={({ isActive }) =>
                        isActive ? "isActive" : ""
                    }>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src='/images/Clinicians-icon.svg' alt='Clinicians Icon' />
                        </ListItemIcon>
                        <ListItemText> {t('DashboardPage.SideBar.ClinicianSideBar.t3')} </ListItemText>
                    </ListItemButton>
                </ListItem>
                </NavLink> */}
            </List>
        </>
    )
}
