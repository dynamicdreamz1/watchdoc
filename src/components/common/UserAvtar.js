import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import Badge from '@mui/material/Badge';

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
  return (
    <>
        <div className='account-owner'>
            <div className='info'>
                <span className='uname'>Dr Andrew Smith</span>
                <span className='uposition'>WatchDoc Admin</span>
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
