import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';
import { useTranslation } from 'react-i18next';
import { TableSkeleton } from '../../Utility/Skeleton';

export default function CliniciansRequestsTable(props) {
    const { value, clinicianStaff, allClinician, loading, handleChangePage, currentPage, totalPages,pages } = props;
    const { t } = useTranslation();

    // console.log(value);
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
                    {loading ? <TableSkeleton /> :
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

                                {allClinician?.length > 0 && allClinician?.map((element) => (
                                    <React.Fragment key={element.id}><ClinicianInfoRow value={value} data={element} clinicianStaff={allClinician} /></React.Fragment>
                                ))}


                            </TableBody>
                        </Table>}

                </>

            </TableContainer>

            {value === 0 ?
                <Pagination page={currentPage} onChange={handleChangePage} count={totalPages} variant="outlined" shape="rounded" className='table-pagination' />
                : ""}
            {value === 1 &&
                <Pagination page={currentPage} onChange={handleChangePage} count={totalPages} variant="outlined" shape="rounded" className='table-pagination' />
            }


        </>

    )
}
