import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { UserContext } from '../../Store/Context';
import { MetaFormeting } from '../../Utility/functions';
import { useTranslation } from 'react-i18next';
import { getCurrentUserData, logout } from '../../services/UserService';
import { Link } from 'react-router-dom';

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
    const {currentUserData} = useContext(UserContext);
    const userData = getCurrentUserData();
    let finalUser=currentUserData?.userData?.meta_data.length ===0?userData:currentUserData?.userData;
    const {first_name,last_name,full_name} =  MetaFormeting(finalUser);
    const first_leter=first_name?.charAt(0);
    // const {full_name}=MetaFormeting(finalUser)
    const {t}=useTranslation()
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandel=()=>{   
        logout();
        window.location.reload();
    }

    return (
    <>
        <div className='account-owner'>
            <div className='info'>
                <span className='uname'>{ currentUserData?.role==="Clinician" ? `${full_name}` : currentUserData?.role==="Hospital" ? `${full_name}`: currentUserData?.role==="Admin" ? `${first_name} ${last_name}` : `${first_name} ${last_name}`}</span>
                <span className='uposition'>{currentUserData?.role === "Clinician" ? t('UserAvtar.role.DoctorRole') : currentUserData?.role==="Hospital" ? t('UserAvtar.role.HospitalRole') : currentUserData?.role==="Admin" ? t('UserAvtar.role.AdminRole') : t('UserAvtar.role.userRole')}</span>
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
                        {/* <Avatar alt="Remy Sharp" src="/images/avtar.png" /> */}
                        <Avatar>{first_leter}</Avatar>
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
                <MenuItem onClick={handleClose}><Link to="/staff-users">Staff Users</Link></MenuItem>
                <MenuItem onClick={(e)=>logoutHandel()}>Logout</MenuItem>
            </Menu>
        </div>
    </>
  )
}
