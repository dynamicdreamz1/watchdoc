import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../../css/ProfileSettings.css'
import ChangePassword from './ChangePassword';
import MyProfile from './MyProfile';
import EditTwoFactor from './EditTwoFactor';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
  function TabPanel(props: TabPanelProps) {
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
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function ProfileSettingTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <>
        <Box sx={{ width: '100%' }} className="profile-settings">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tab-list-block">
                <h1>Settings</h1>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Password" {...a11yProps(1)} />
                <Tab label="Two-factor authentication" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div className='tab-content'>
                <TabPanel value={value} index={0}>
                    <MyProfile/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePassword/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <EditTwoFactor/>
                </TabPanel>
            </div>
        </Box>
        </>
    )
}
