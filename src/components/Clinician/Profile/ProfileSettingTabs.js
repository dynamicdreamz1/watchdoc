import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../../css/ProfileSettings.css";
import ChangePassword from "./ChangePassword";
import MyProfile from "./MyProfile";
import EditTwoFactor from "./EditTwoFactor";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EmergencyContacts from "../../common/EmergencyContacts";
import { ToastContainer } from "react-toastify";
import { getCurrentUserData } from "../../../services/UserService";

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
          <Typography component={"div"}>{children}</Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileSettingTabs() {
  const [value, setValue] = useState(0);
  const userData = getCurrentUserData()
 


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ToastContainer />
      <Box sx={{ width: "100%" }} className="profile-settings">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tab-list-block"
        >
          <h1>Settings</h1>
        {
          userData.roles[0].name !== "User" ? <Tabs 
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
           <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Two-factor authentication" {...a11yProps(1)} />
          <Tab label="Password" {...a11yProps(2)} /> 
        </Tabs> : <Tabs 
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Two-factor authentication" {...a11yProps(0)} />
             <Tab label="Emergency contacts" {...a11yProps(1)} />  :  
          </Tabs>
        }
          
        </Box>

        {
          userData.roles[0].name !== "User" ? 
        <div className="tab-content">
        <TabPanel value={value} index={0}>
            <MyProfile />
          </TabPanel> 
          <TabPanel value={value} index={1}>
            <EditTwoFactor />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChangePassword />
          </TabPanel>
          <Link to="/dashboard" className="close-btn">
            <img src="/images/Close-Icon.svg" alt="Close Icon" />
          </Link>
        </div>
        : <div className="tab-content">
        
          <TabPanel value={value} index={0}>
            <EditTwoFactor />
          </TabPanel>
          <TabPanel value={value} index={1} >
            <EmergencyContacts />
          </TabPanel> 
          <Link to="/dashboard" className="close-btn">
            <img src="/images/Close-Icon.svg" alt="Close Icon" />
          </Link>
        </div> }
      </Box>
    </>
  );
}
