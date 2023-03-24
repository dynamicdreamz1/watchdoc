import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';



const ITEM_HEIGHT = 48;

export default function TableShorting(props) {
    const {patientData,setPatientData,reviewData,setReviewData,}=props;
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);
    let [options, setOptions] = useState([
        t('DashboardPage.SideButton.d1'),
        t('DashboardPage.SideButton.d2'),
        t('DashboardPage.SideButton.d3')
    ])
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event, option) => {

        if (option === "View All") {
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View Less Data"
            ]);
            props?.setViewAll(!props?.viewAll);
        }
        
        if(option==="Newest to Oldest"){
          
            const sortedData = patientData.sort((a, b) => b.date - a.date);
            const reviewedSortedData=reviewData?.sort((a,b)=>b.date - a.date);
            props?.setViewAll(!props?.viewAll)
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View Less Data"
            ]);
            setReviewData(reviewedSortedData)
            setPatientData(sortedData)
        }
        if(option==="Oldest to Newest"){
            const sortedData=props?.patientData.sort((a,b)=>(a.date-b.date))
            props?.setViewAll(!props?.viewAll)
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                "View Less Data"
            ]);
            props?.setPatientData(sortedData)
        }
        
        if (option === "View Less Data") {
            setOptions(prevOptions => [
                ...prevOptions.slice(0, prevOptions.length - 1),
                t('DashboardPage.SideButton.d3')
            ]);
            props?.setViewAll(!props?.viewAll);
        }
        setAnchorEl(null);
        setSelectedOption(option);
    };

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === selectedOption} onClick={(event) => { handleClose(event, option) }} >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
