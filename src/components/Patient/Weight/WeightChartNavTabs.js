import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import WeightChart from '../../common/Chart/WeightChart'
import ChartTitle from '../../common/Chart/ChartTitle';

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
          <Box sx={{ p: 4 }}>
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

export default function WeightChartNavTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="Chart Tabs" className='chart-tabs'>
                    {/* <Tab label="Hourly" {...a11yProps(0)} /> */}
                    <Tab label="Daily" {...a11yProps(0)} />
                    <Tab label="Weekly" {...a11yProps(1)} />
                    <Tab label="Monthly" {...a11yProps(2)} />
                </Tabs>
                <ChartTitle value={value}/>
            </Box>
            <TabPanel value={value} index={0}>
                <WeightChart/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <WeightChart/>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <WeightChart/>
            </TabPanel>
        </Box>
        </>
    )
}
