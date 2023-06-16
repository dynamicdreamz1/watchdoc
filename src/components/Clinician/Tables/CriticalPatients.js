import React, { useState } from 'react'
import { Dialog,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PatientInfoRow from '../../common/Table/PatientInfoRow'
import Paper from '@mui/material/Paper';
import ClinicianRequest from '../../Admin/ClinicianRequest';
import { useLocation } from 'react-router-dom';
import { deletePatientAndClinician } from '../../../services/AdminService';
import Swal from 'sweetalert2';



export default function CriticalPatients(props) {
    const location=useLocation();
    const { patientData, value,handleClickStatus , adminGetAllPatient} = props
    // const {currentPageAllPendingPatientData,dataLimitAllPendingPatientData,totalPagesAllPendingPatientData,
    //     getAllParticularClinicianPatientData,loadingAllPendingPatientData}=props?.action || {}
    const [profileBarData, setProfileBarData] = useState([])
    const [open, setOpen] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
   
    const handleClose = () => {
        setOpen(false);
        setOpenRequest(false)
    };
    const handleClickOpenRequestPopUp = (data) => {
        setProfileBarData(data)
        setOpenRequest(true)
    }
    const DeleteRequest = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this clinician!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the delete operation
                const apiData = {
                    id: id,
                    role: 'patients'
                }
                deletePatientAndClinician(apiData)
                    .then((res) => {
                      if (res) {
                        adminGetAllPatient()
                      }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
            }
        });
      
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
                                {location?.pathname==='/adminpatient'?"":   <TableCell>Status</TableCell>}
                                {location?.pathname==='/adminpatient'?<TableCell>Delete</TableCell>: ""   }
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

                        {patientData?.map((el, I) => {
                            return (
                                <TableBody key={I}>
                                    <PatientInfoRow el={el} value={value} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp} handleClickStatus={handleClickStatus} DeleteRequest={DeleteRequest} />
                                </TableBody>
                            )
                        })
                        }
                    </Table>
                </TableContainer>
            
            
        </>
    )
}
