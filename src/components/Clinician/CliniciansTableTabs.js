import { Box, Dialog, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import TableShorting from './TableShorting';
import CliniciansRequestsTable from './CliniciansRequestsTable';
import AddClinician from '../Admin/AddClinician';
import '../../css/CliniciansTableTabs.css'
import { getAllClinicians, getFilteredClinicians, getPendingClinicians } from '../../services/AdminService';

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
  const page = (1);
  const [length, setLength] = useState(0);
  // let pageCount = 2

  const pendingClincians = async () => {
    let res = await getPendingClinicians()
    if (res?.data?.data.length === 0) {
      setFirstLength("No records found.")
    }

    setClinicianStaff(res?.data?.data)
    setFirstLoading(false)
  }

  const allClincians = async () => {
    let res = await getAllClinicians()
    if (res?.data?.data.length === 0) {
      setSecondLength("No records found.")
    }
    setLength(res?.data?.data.length)
    setAllClinician(res?.data);
    setSecondLoading(false)
  }

  useEffect(() => {
    setFirstLoading(true)

    pendingClincians()
  }, [])


  useEffect(() => {
    setSecondLoading(true)
    allClincians()

  }, []);

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

  const filterData = async (pageCount) => {
    const data={
      pageCount:pageCount,
      page:page
    }
    let res = await getFilteredClinicians(data)
    setAllClinician(res?.data)
  };

  // const handleNextPage = async () => {
  //   setPage(page + 1);
  //   let res = await getFilteredClinicians(page, pageCount)
  //   setAllClinician(res?.data);
  // }
  


  

  // const handlePreviousPage = () => {
  //   setPage(page - 1);
  // };


  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box className="table-header-block">
          <div className="left-block">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
              <Tab label={`Clinicians Pending (${clinicianStaff?.length})`} {...a11yProps(0)} />
              {/* <Tab label={`Clinicians with Pending Patients  (${clinicianStaff?.length})`} {...a11yProps(1)} /> */}
              <Tab label={`View All Clinicians   (${length})`} {...a11yProps(1)} />
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
                  <MenuItem onClick={() => filterData(1)} value={1}>1 per page</MenuItem>
                  <MenuItem onClick={() => filterData(2)} value={2}>2 per page</MenuItem>
                  <MenuItem onClick={() => filterData(3)} value={3}>3 per page</MenuItem>
                  <MenuItem onClick={() => filterData(4)} value={4}>4 per page</MenuItem>
                  <MenuItem onClick={() => filterData(5)} value={5}>5 per page</MenuItem>
                  <MenuItem onClick={() => filterData(6)} value={6}>6 per page</MenuItem>
                  <MenuItem onClick={() => filterData(7)} value={7}>7 per page</MenuItem>
                  <MenuItem onClick={() => filterData(8)} value={8}>8 per page</MenuItem>
                  <MenuItem onClick={() => filterData(9)} value={9}>9 per page</MenuItem>
                  <MenuItem onClick={() => filterData(10)} value={10}>10 per page</MenuItem>
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
                    <CliniciansRequestsTable value={value} allClinician={allClinician?.data}
                       
                      recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                  </TabPanel>
                </>
              } </> : ""}

      </Box>
    </>
  )
}
