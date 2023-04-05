import { Box, Dialog, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import TableShorting from './TableShorting';
import CliniciansRequestsTable from './CliniciansRequestsTable';
import AddClinician from '../Admin/AddClinician';
import '../../css/CliniciansTableTabs.css'
import { getAllClinicians, getPendingClinicians } from '../../services/AdminService';
import axios from 'axios';

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

export default function CliniciansTableTabs({ open, setOpen }) {
  const [viewAll, setViewAll] = useState(false)
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [clinicianStaff, setClinicianStaff] = useState([])
  const [allClinician, setAllClinician] = useState([])
  const [firstLoading, setFirstLoading] = useState(false)
  const [secondLoading, setSecondLoading] = useState(false)
  const [firstLength, setFirstLength] = useState("")
  const [secondLength, setSecondLength] = useState("")
  const [page, setPage] = useState(1);
  const pageCount = 1;

  const pendingClincians = async () => {
    let res = await getPendingClinicians()
    console.log(res)
    if (res?.data?.data.length === 0) {
      setFirstLength("No records found.")
    }

    setClinicianStaff(res?.data?.data)
    setFirstLoading(false)
  }

  const allClincians = async () => {
    let res = await getAllClinicians(pageCount)
    if (res?.data?.data.length === 0) {
      setSecondLength("No records found.")
    }
    setAllClinician(res?.data);
    setSecondLoading(false)
  }
  console.log('111111',allClinician);

  useEffect(() => {
    setFirstLoading(true)
    setSecondLoading(true)
    pendingClincians()
  }, [])


  useEffect(() => {
    allClincians()

  }, [page]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePaginationCount = (value) => {
    setRecordsPerPage(value)
    setCurrentPage(1)

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1)
  };












  const handleNextPage = () => {
    setPage(page + 1);
    axios.get(allClinician?.next_page_url)
      .then(response => setAllClinician([...allClinician, ...response.data]))
      .catch(error => console.log(error));

  };

  const handlePreviousPage = () => {
    setPage(page - 1);
    axios.get(allClinician?.next_page_url)
      .then(response => setAllClinician([...allClinician, ...response.data]))
      .catch(error => console.log(error));

  };















  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box className="table-header-block">
          <div className="left-block">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
              <Tab label={`Clinicians Pending (${clinicianStaff?.length})`} {...a11yProps(0)} />
              {/* <Tab label={`Clinicians with Pending Patients  (${clinicianStaff?.length})`} {...a11yProps(1)} /> */}
              <Tab label={`View All Clinicians  (${allClinician?.data?.length})`} {...a11yProps(1)} />
            </Tabs>
          </div>
          {value === 1 &&
            <>
              <div className='right-block'>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={recordsPerPage}
                  label="PerPage"
                  onChange={(e) => handleChangePaginationCount(e.target.value)} defaultValue={recordsPerPage}
                  className="per-page-select"
                >
                  <MenuItem value={1}>1 per page</MenuItem>
                  <MenuItem value={2}>2 per page</MenuItem>
                  <MenuItem value={3}>3 per page</MenuItem>
                  <MenuItem value={4}>4 per page</MenuItem>
                  <MenuItem value={5}>5 per page</MenuItem>
                  <MenuItem value={6}>6 per page</MenuItem>
                  <MenuItem value={7}>7 per page</MenuItem>
                  <MenuItem value={8}>8 per page</MenuItem>
                  <MenuItem value={9}>9 per page</MenuItem>
                  <MenuItem value={10}>10 per page</MenuItem>
                </Select>
                <TableShorting setViewAll={setViewAll} viewAll={viewAll} />

              </div>
            </>
          }
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="add-staff-user-dialog"
          aria-describedby="add-staff-user-dialog"
          className='add-staff-user-dialog'
        >
          <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
          <AddClinician clinicianStaff={clinicianStaff} setOpen={setOpen} />
        </Dialog>
        {value === 0 ?
          <>
            {firstLoading ? <div> <br />Loading...</div> :

              <>
                {firstLength ? firstLength : ""}
                <TabPanel value={value} index={0} className="table-nav-tabs-content">
                  <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </TabPanel>
              </>
            }
          </>
          : value === 1 ?
            <>
              {/* <TabPanel value={value} index={1} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </TabPanel> */}
              {secondLoading ? <div> <br />Loading...</div> :
                <>
                  {secondLength ? secondLength : ""}
                  <TabPanel value={value} index={1} className="table-nav-tabs-content">
                    <CliniciansRequestsTable value={value} allClinician={allClinician?.data} handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage} page={page}
                    recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                  </TabPanel>
                </>
              } </> : ""}

      </Box>
    </>
  )
}
