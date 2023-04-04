import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';
import { useTranslation } from 'react-i18next';

export default function CliniciansRequestsTable(props) {
 const { value, clinicianStaff, allClinician, recordsPerPage, currentPage, setCurrentPage,handlePreviousPage,handleNextPage,page } = props;

    const { t } = useTranslation();    
    const [data] = useState(allClinician)
    
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(data?.length / recordsPerPage)
    const handleChange = (event, value) => {
        setCurrentPage(value)
    };

    return (
        
        <>
            <TableContainer component={Paper} className="clinicians-table">
                {value === 0 || value === 1 ? "" :
                    <div className='table-title'>
                        <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                        <h4> {t('CliniciansRequestsTable.heading')}({clinicianStaff?.length})</h4>
                    </div>
                }
                <>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('CliniciansRequestsTable.tableCell1')}</TableCell>
                                <TableCell>{t('CliniciansRequestsTable.tableCell2')}</TableCell>
                                <TableCell>{t('CliniciansRequestsTable.tableCell3')}</TableCell>
                                {value === 0 ? "" :
                                    <>
                                        <TableCell align="center">{t('CliniciansRequestsTable.tableCell4')}</TableCell>
                                        <TableCell align="center">{t('CliniciansRequestsTable.tableCell5')}</TableCell>
                                    </>
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {clinicianStaff?.length > 0 && clinicianStaff?.map((element) => (
                                <React.Fragment key={element.id}><ClinicianInfoRow value={value} data={element} clinicianStaff={clinicianStaff} /></React.Fragment>
                            ))}

                            {currentRecords?.length > 0 && currentRecords?.map((element) => (
                                <React.Fragment key={element.id}><ClinicianInfoRow value={value} data={element} clinicianStaff={clinicianStaff} /></React.Fragment>
                            ))}  


                        </TableBody>
                    </Table>

                </>

            </TableContainer>
            <button disabled={page === 1} onClick={handlePreviousPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
        </>

    )
}
