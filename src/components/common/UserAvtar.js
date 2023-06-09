import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState,useContext } from 'react'
import Badge from '@mui/material/Badge';
import { UserContext } from '../../Store/Context';
import { MetaFormeting } from '../../Utility/functions';
import { useTranslation } from 'react-i18next';
import { getCurrentUserData, logout } from '../../services/UserService';
import { Link, useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
'& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: '""',
    },
}
}));

export default function UserAvtar() {
    const navigate=useNavigate();
    const {currentUserData} = useContext(UserContext);
    const userData = getCurrentUserData();
    // let finalUser=currentUserData?.userData?.meta_data.length ===0?userData:currentUserData?.userData;
    const {first_name,last_name,full_name,profile_pic} =  MetaFormeting(userData);
   
    const {t}=useTranslation()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logoutHandel=()=>{   
        logout();
        if(currentUserData?.role==='User'){
            navigate("/patiententry")
        }
        else{
            navigate("/signin")

        }
        window.location.reload();
    }
    return (
    <>
        <div className='account-owner'>
            <div className='info'>
                <span className='uname'>{ userData?.roles[0]?.name==="Clinician" ? `${first_name} ${last_name}` : userData?.roles[0]?.name==="Hospital" ? `${full_name}`: userData?.roles[0]?.name==="Admin" ? `${first_name} ${last_name}` : `${first_name} ${last_name}`}</span>
                <span className='uposition'>{userData?.roles[0]?.name === "Clinician" ? t('UserAvtar.role.DoctorRole') : userData?.roles[0]?.name==="Hospital" ? t('UserAvtar.role.HospitalRole') : userData?.roles[0]?.name==="Admin" ? t('UserAvtar.role.AdminRole') : t('UserAvtar.role.userRole')}</span>
            </div>
            <Button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className='image'>
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src={profile_pic===null?"/images/user-picture-placeholder.png":profile_pic} />
                        {/* <Avatar>{first_leter}</Avatar> */}
                    </StyledBadge>
                </div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
                <MenuItem onClick={handleClose}><Link to="/profile-settings">Settings</Link></MenuItem>
                {currentUserData?.role==="Admin" && <MenuItem onClick={handleClose}><Link to="/staffusers">Staff Users</Link></MenuItem>}
                <MenuItem onClick={(e)=>logoutHandel()}>Logout</MenuItem>
            </Menu>
        </div>
    </>
  )
}
