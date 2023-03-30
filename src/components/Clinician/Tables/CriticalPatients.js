import React, { useState } from 'react'
import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PatientInfoRow from '../../common/Table/PatientInfoRow'
import Paper from '@mui/material/Paper';

export default function CriticalPatients(props) {
    const { patientData, handleClickStatus, viewAll} = props

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage=3
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = patientData.slice(indexOfFirstRecord, indexOfLastRecord);
    
    const nPages = Math.ceil(patientData.length / recordsPerPage)

    const handleChange = (event, newValue) => {
        setCurrentPage(newValue)
    };


    const viewAllData = viewAll ? patientData.slice(0, patientData.length) : patientData?.slice(0, 3);

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
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {currentRecords.length !== 0 && currentRecords?.map((el, I) => {
                        return (
                            <TableBody key={I}>
                                <PatientInfoRow el={el} handleClickStatus={handleClickStatus}  />
                                {/* <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/>
                <PatientInfoRow/> */}
                            </TableBody>

                        )
                    })

                    }
                </Table>
            </TableContainer>
                
            {currentRecords?.length === 0 ? "" :
            <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
                }
        </>
    )
}
