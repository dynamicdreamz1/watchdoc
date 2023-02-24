import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { UserContext } from '../../Store/Context';

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
  

  return (
    <>
        <div className='account-owner'>
            <div className='info'>
                <span className='uname'>{`${currentUserData?.userData?.first_name} ${currentUserData?.userData?.last_name}`}</span>
                <span className='uposition'>{currentUserData?.role === "User" ? 'Patient' : "Clinicial"}</span>
            </div>
            <div className='image'>
                <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/images/avtar.png" />
                </StyledBadge>
            </div>
        </div>
    </>
  )
}
