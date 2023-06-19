import { Box, Dialog, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import TableShorting from './TableShorting';
import CliniciansRequestsTable from './CliniciansRequestsTable';
import AddClinician from '../Admin/AddClinician';
import '../../css/CliniciansTableTabs.css'
import { getAllClinicians, getPendingClinicians } from '../../services/AdminService';
import { TableSkeleton } from '../../Utility/Skeleton';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify'


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

export default function CliniciansTableTabs({ open, setOpen,searchData,setValue,value }) {
  const { t } = useTranslation()
  const [allClinician, setAllClinician ] = useState([]);
  const [viewAll, setViewAll] = useState(false)
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [recordsPerPagePendingClinician, setRecordsPerPagePendingClinician] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);
  const [pendingClinician, setPendingClinician] = useState([])
  const [firstLoading, setFirstLoading] = useState(false)
  const [secondLoading, setSecondLoading] = useState(false)
  const [firstLength, setFirstLength] = useState("")
  const [secondLength, setSecondLength] = useState("")
  const [totalPages, setTotalPages] = useState(0);
  const [dataLimit,setDataLimit]=useState(10)
  const [limit,setLimit]=useState(10)
  const [pages, setPages] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const specificOption = [
    t('DashboardPage.SideButton.d1'),
    t('DashboardPage.SideButton.d2'),
    "Alphabetical"
]
let [options, setOptions] = useState(specificOption)

  const pendingClincians = async (limit,currentPage,searchData) => {
    setFirstLoading(true)
    let res = await getPendingClinicians(limit,currentPage,searchData ? searchData : '')
    if (res?.data?.data?.data?.length === 0) {
      setFirstLength("No records found.")
    }
    setPendingClinician(res?.data?.data)
    let nPages=Math.ceil(res?.data?.data?.total/limit)
    setPages(nPages)
    setFirstLoading(false)
  }

  const getAllClinicianData=async(dataLimit,currentPage,searchData)=>{
    setSecondLoading(true)           
    let res = await getAllClinicians(dataLimit,currentPage,searchData ?searchData : '');
    if(res?.data?.data?.data?.length===0){
      setSecondLength("No records found.")
    };
    setAllClinician(res?.data)
    setTotalPages(Math.ceil(res?.data?.data?.total / dataLimit));
    setSecondLoading(false)  
  }

  useEffect(() => {
   if(value===0){
      pendingClincians(limit,currentPage,searchData)
   }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage,limit,searchData])

  useEffect(() => {
      getAllClinicianData(dataLimit,currentPage,searchData)
  },[currentPage,dataLimit,searchData]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };    

  const handleCloseVieAllPopUP = (event, option) => {
    if (option === "View All") {
        setOptions(prevOptions => [
            ...prevOptions.slice(0, prevOptions.length - 1),
            "View Less"
        ]);
        setViewAll(!viewAll);
    }

    if (option === "View Less") {
        setOptions(prevOptions => [
            ...prevOptions.slice(0, prevOptions.length - 1),
            "View All"
        ]);
        setViewAll(!viewAll);
    }
    setAnchorEl(null);
    setSelectedOption(option);
};

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePaginationCount = (value) => {
    setRecordsPerPage(value)
    setCurrentPage(1)
  }


  const handleChangePaginationCountPendingClinician=(value)=>{
    setRecordsPerPagePendingClinician(value)
    setCurrentPage(1)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1)
  };

  const handleDataChange =(pageCount) => {
    setDataLimit(pageCount)    
  };

  const handleDataChangePendingClinician=(pageCount)=>{
    setLimit(pageCount)
  }

  const pageOptions=[5,10,20,30,40,50,60,70,80,90,100];
  return (
    <>
    <ToastContainer />

      <Box sx={{ width: '100%' }}>
        <Box className="table-header-block">
          <div className="left-block">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="table-nav-tabs">
             <Tab label={`Clinicians Pending (${pendingClinician?.total===undefined?"0":pendingClinician?.total})`} {...a11yProps(0)} />
              <Tab label={`View All Clinicians   (${allClinician?.data?.total===undefined?"0":allClinician?.data?.total})`} {...a11yProps(1)} />
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
              
                    {pageOptions.map((pageNumber,I)=>  <MenuItem key={I} onClick={() => handleDataChange(pageNumber)} value={pageNumber}>{pageNumber} per page</MenuItem> )}

                  </Select>
                <TableShorting setViewAll={setViewAll} viewAll={viewAll} anchorEl={anchorEl}
                 setAnchorEl={setAnchorEl} handleClose={handleCloseVieAllPopUP} options={options} selectedOption={selectedOption}/>

              </div>
            </>
          }
          {value === 0 &&
            <>
              <div className='right-block'>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={recordsPerPagePendingClinician}
                    label="PerPage"
                    onChange={(e) => handleChangePaginationCountPendingClinician(e.target.value)} defaultValue={recordsPerPagePendingClinician}
                    className="per-page-select"
                  >
              
                    {pageOptions.map((pageNumber,I)=>  <MenuItem key={I} onClick={() => handleDataChangePendingClinician(pageNumber)} value={pageNumber}>{pageNumber} per page</MenuItem> )}

                  </Select>
                <TableShorting setViewAll={setViewAll} viewAll={viewAll} anchorEl={anchorEl}
                 setAnchorEl={setAnchorEl} handleClose={handleCloseVieAllPopUP} options={options} selectedOption={selectedOption}/>

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
          <AddClinician clinicianStaff={allClinician} setOpen={setOpen} dataLimit={dataLimit} getAllClinicianData={getAllClinicianData}
          currentPage={currentPage} />
        </Dialog>
        {value === 0 ?
          <>
            {firstLoading ? <div> <br /><TableSkeleton /></div> :

              <>
                {firstLength ? firstLength : ""}
                <TabPanel value={value} index={0} className="table-nav-tabs-content">
                  <CliniciansRequestsTable value={value} clinicianStaff={pendingClinician?.data} recordsPerPage={recordsPerPage} totalPages={pages}  handleChangePage={handleChangePage}
                   currentPage={currentPage} setCurrentPage={setCurrentPage} getClinicianData={pendingClincians} />
                </TabPanel>
              </>
            }
          </>
          : value === 1 ?
            <>
              {/* <TabPanel value={value} index={1} className="table-nav-tabs-content">
          <CliniciansRequestsTable value={value} clinicianStaff={clinicianStaff} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </TabPanel> */}
              {secondLoading ? <div> <br /><TableSkeleton /></div> :
                <>
                  {secondLength ? secondLength : ""}
                  <TabPanel value={value} index={1} className="table-nav-tabs-content">
                    <CliniciansRequestsTable value={value} allClinician={allClinician?.data?.data} setAllClinician={setAllClinician} handleChangePage={handleChangePage}
                       currentPage={currentPage} totalPages={totalPages}
                      recordsPerPage={dataLimit}  getClinicianData={getAllClinicianData} />
                  </TabPanel>
                </>
              } </> : ""}

      </Box>
    </>
  )
}