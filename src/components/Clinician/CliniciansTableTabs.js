import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
import TableShorting from './TableShorting';
import CliniciansRequestsTable from './CliniciansRequestsTable';

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
          <Box sx={{ p: 2 }}>
            <Typography component={'div'}>{children}</Typography>
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

export default function CliniciansTableTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
        <Box sx={{ width: '100%' }}>
          <Box className="table-header-block">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                  <Tab label="Clinicians Pending (2)" {...a11yProps(0)} />
                  <Tab label="Clinicians with Pending Patients (2)" {...a11yProps(1)} />
                  <Tab label="View All Clinicians (2)" {...a11yProps(1)} />
              </Tabs>
              <TableShorting/>
          </Box>
          <TabPanel value={value} index={0} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value}/>
          </TabPanel>
          <TabPanel value={value} index={1} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value}/>
          </TabPanel>
          <TabPanel value={value} index={2} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value}/>
          </TabPanel>
        </Box>
        </>
    )
}
