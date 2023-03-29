import { Box, Dialog, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import TableShorting from './TableShorting';
import CliniciansRequestsTable from './CliniciansRequestsTable';
import AddClinician from '../Admin/AddClinician';
import '../../css/CliniciansTableTabs.css'

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

export default function CliniciansTableTabs({open,setOpen}) {
    const [recordsPerPage,setRecordsPerPage] = useState(5);
    const [value, setValue] = React.useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [clinicianStaff]=useState([
      {
          "id": 1,
          "email": "info@neighbourhoodmedical.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Randerson Michael"
              }, 
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 2,
          "email": "reception@lincolnmedical.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr johnson"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 3,
          "email": "beth@ochremedical.com",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr loosy"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 4,
          "email": "drben@paragon.com",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Georgia"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 5,
          "email": "info@walker.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Perry"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 6,
          "email": "reception@lincolnmedical.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr johnson"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 7,
          "email": "info@walker.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Randerson Michael"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 8,
          "email": "drarpit@gmail.com",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr loosy"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 9,
          "email": "reception@lincolnmedical.com.au",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Georgia"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 10,
          "email": "beth@ochremedical.com",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr Perry"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 11,
          "email": "drarpit@gmail.com",
          "email_verified_at": null,
          "t&c": 0,
          "profile_created": 0,
          "contact_number": null,
          "mobile_num_verify": 0,
          "is_active": 0,
          "verification_code": 1691,
          "terra_user_id": null,
          "created_at": "2023-02-27T06:09:21.000000Z",
          "updated_at": "2023-02-27T06:09:21.000000Z",
          "meta_data": [
              {
                  "id": 6,
                  "meta_key": "full_name",
                  "meta_value": "Dr arpit"
              },
              {
                  "id": 8,
                  "meta_key": "zip",
                  "meta_value": "395002"
              },
              {
                  "id": 201,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
              },
              {
                  "id": 209,
                  "meta_key": "address",
                  "meta_value": "594 Rafe Lane , Southaven , Mississippi."
              }
          ]
      },
      {
          "id": 12,
          "email": "drjevin@gmail.com",
          "email_verified_at": "2023-03-24T10:55:51.000000Z",
          "t&c": 0,
          "profile_created": 0,
          "contact_number": "54544556565",
          "mobile_num_verify": 0,
          "is_active": 1,
          "verification_code": 953963,
          "terra_user_id": null,
          "created_at": "2023-02-28T00:05:29.000000Z",
          "updated_at": "2023-03-24T10:55:51.000000Z",
         
          "meta_data": [
              {
                  "id": 11,
                  "meta_key": "full_name",
                  "meta_value": "Dr jevin"
              },
              {
                  "id": 13,
                  "meta_key": "zip",
                  "meta_value": "1234"
              },
              {
                  "id": 207,
                  "meta_key": "image",
                  "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
              },
              {
                  "id": 211,
                  "meta_key": "address",
                  "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
              }
          ]
      }
  ])

    const handleClose = () => {
      setOpen(false);
  };

  const handleChangePaginationCount=(value)=>{
    setRecordsPerPage(value)
    setCurrentPage(1)

  }

    const handleChange = (event,newValue) => {
        setValue(newValue);
         setCurrentPage(1)
    };
    
    return (
        <>
        <Box sx={{ width: '100%' }}>
          <Box className="table-header-block">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
                  <Tab label={`Clinicians Pending (${clinicianStaff?.length})`} {...a11yProps(0)} />
                  <Tab label={`Clinicians with Pending Patients  (${clinicianStaff?.length})`} {...a11yProps(1)} />
                  <Tab label={`View All Clinicians  (${clinicianStaff?.length})`} {...a11yProps(1)} />
              </Tabs>
              {/* {value===2 ? 
              <div className='table'> */}
              {/* <select onChange={(e) => handleChangePaginationCount(e.target.value)} defaultValue={recordsPerPage}>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3"  >3</option>
                <option value="4" >4</option>
                <option value="5"  >5</option>
                <option value="6" >6</option>
                <option value="7"  >7</option>
                <option value="8" >8</option>
                <option value="9"  >9</option>
                <option value="10" >10</option>
            </select> */}
            <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={recordsPerPage}
                label="PerPage"
                onChange={(e) => handleChangePaginationCount(e.target.value)} defaultValue={recordsPerPage}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
            </Select>
            {/* </div>  */}
            {/* : "" } */}
              <TableShorting/>
          </Box>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-staff-user-dialog"
        aria-describedby="add-staff-user-dialog"
        className='add-staff-user-dialog'
      >
        <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
        <AddClinician clinicianStaff={clinicianStaff} setOpen={setOpen}/>
      </Dialog>
          <TabPanel value={value} index={0} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </TabPanel>
          <TabPanel value={value} index={1} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </TabPanel>
          <TabPanel value={value} index={2} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage}currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </TabPanel>
        </Box>
        </>
    )
}
