import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PatientInfoRow from '../../common/Table/PatientInfoRow'
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';


export default function CriticalPatients(props) {
    const location = useLocation();
    const { patientData, viewAll } = props
    // console.log(patientData);
    // let finalDta = [];
    // if (location.pathname === "/patients") {
    //     finalDta = [...patientData]
    // }
    // else {
    //     const viewAllData = viewAll ? patientData.slice(0, patientData.length) : patientData?.slice(0, 3);
    //     finalDta = [...viewAllData]
    // }
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
                    {/* {finalDta?.length !== 0 && finalDta?.map((el, I) => {
                        return (
                            <TableBody key={I}>
                                <PatientInfoRow el={el}   />
                            </TableBody>

                        )
                    })

                    } */}

                    {patientData?.length !== 0 && patientData?.map((el, I) => {
                        return (
                            <TableBody key={I}>
                                <PatientInfoRow el={el} />
                            </TableBody>

                        )
                    })

                    }
                </Table>
            </TableContainer>

            {/* {currentRecords?.length === 0 ? "" :
            <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
                }

            { location.pathname==="/dashboard"  ? <button onClick={handleClick}>View All</button> : "" } */}
        </>
    )
}
