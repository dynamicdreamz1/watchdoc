import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { UserContext } from '../../Store/Context';
import { MetaFormeting } from '../../Utility/functions';
import { useTranslation } from 'react-i18next';

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
    const {first_name,last_name} =  MetaFormeting(currentUserData?.userData);
    const {full_name}=MetaFormeting(currentUserData?.userData)
    const {t}=useTranslation()
   
  
  return (
    <>
        <div className='account-owner'>
            <div className='info'>
                <span className='uname'>{ currentUserData?.role==="Clinician" ? `${full_name}` : currentUserData?.role==="Hospital" ? `${full_name}`:`${first_name} ${last_name}`}</span>
                <span className='uposition'>{currentUserData?.role === "Clinician" ? t('UserAvtar.role.DoctorRole') : currentUserData?.role==="Hospital" ? t('UserAvtar.role.HospitalRole') : currentUserData?.role==="Admin" ? t('UserAvtar.role.AdminRole') : t('UserAvtar.role.userRole')}</span>
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
