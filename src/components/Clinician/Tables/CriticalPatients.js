import React, { useState } from 'react'
import { Dialog,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PatientInfoRow from '../../common/Table/PatientInfoRow'
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import ClinicianRequest from '../../Admin/ClinicianRequest';


export default function CriticalPatients(props) {
    const location = useLocation();
    const { patientData, value,handleClickStatus} = props
    const [profileBarData, setProfileBarData] = useState([])
    const [open, setOpen] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
    let finalDta = [];
    if (location.pathname === "/patients") {
        finalDta = patientData;
    }
    else {
        const viewAllData = props?.viewAll ? patientData.slice(0, patientData.length) : patientData?.slice(0, 8);
        finalDta = [...viewAllData]
    }
    const handleClose = () => {
        setOpen(false);
        setOpenRequest(false)
    };

    const handleClickOpenRequestPopUp = (data) => {
        setProfileBarData(data)
        setOpenRequest(true)
    }
   
    return (
        <> 
                <TableContainer component={Paper} className="red-alert-table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Patient</TableCell>
                                <TableCell>BP</TableCell>
                                <TableCell>HR</TableCell>
                                <TableCell>BO</TableCell>
                                <TableCell>BG</TableCell>
                                <TableCell>Temp</TableCell>
                                <TableCell>Wt</TableCell>
                                <TableCell>Sleep</TableCell>
                                <TableCell>Step</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>                        
                        <Dialog
                            open={openRequest}
                            onClose={handleClose}
                            aria-labelledby="clinician-profile-dialog"
                            aria-describedby="clinician-profile-dialog"
                            className='clinician-request-dialog'
                        >
                            <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
                            <ClinicianRequest profileBarData={profileBarData} setOpen={setOpen} open={open}/>
                        </Dialog>

                        {finalDta?.length !== 0 && finalDta?.map((el, I) => {
                            return (
                                <TableBody key={I}>
                                    <PatientInfoRow el={el} value={value} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp} handleClickStatus={handleClickStatus}  />
                                </TableBody>
                            )
                        })
                        }
                    </Table>
                </TableContainer>
            
            
        </>
    )
}
