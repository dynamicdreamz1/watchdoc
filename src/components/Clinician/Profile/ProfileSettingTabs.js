import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../../css/ProfileSettings.css'
import ChangePassword from './ChangePassword';
import MyProfile from './MyProfile';
import EditTwoFactor from './EditTwoFactor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmergencyContacts from '../../Patient/EmergencyContacts';
import { ToastContainer } from 'react-toastify';

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

export default function ProfileSettingTabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
    <ToastContainer />

        <Box sx={{ width: '100%' }} className="profile-settings">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tab-list-block">
                <h1>Settings</h1>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Password" {...a11yProps(1)} />
                <Tab label="Two-factor authentication" {...a11yProps(2)} />
                <Tab label="Emergency contacts" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <div className='tab-content'>
                <TabPanel value={value} index={0}>
                    <MyProfile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePassword/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <EditTwoFactor/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <EmergencyContacts/>
                </TabPanel>
                <Link to="/dashboard" className='close-btn'>
                  <img src='/images/Close-Icon.svg' alt='Close Icon' />
                </Link>
            </div>
        </Box>
        </>
    )
}
