import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableShorting from './TableShorting';
import CriticalPatients from './CriticalPatients';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CriticalPatientsAlertTableTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    return (
        <>
        <Box sx={{ width: '100%' }}>
            <Box className="table-header-block">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                    <Tab label="Critical Alerts - Unreviewed (12)" {...a11yProps(0)} />
                    <Tab label="Critical Alerts - Reviewed (6)" {...a11yProps(1)} />
                </Tabs>
                <TableShorting/>
            </Box>
            <TabPanel value={value} index={0} className="table-nav-tabs-content">
                <CriticalPatients/>
            </TabPanel>
            <TabPanel value={value} index={1} className="table-nav-tabs-content">
                <CriticalPatients/>
            </TabPanel>
        </Box>
        </>
    )
}