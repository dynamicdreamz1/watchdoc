import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';
import { getClinicianData } from '../../services/ClinicianService';
import { useTranslation } from 'react-i18next';

export default function CliniciansRequestsTable() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {t}=useTranslation();
    useEffect(() => {
        setLoading(true)
        getClinicianData()

            .then((res) => {
                console.log(res)
                setData(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
  
    return (
        <>
            <TableContainer component={Paper} className="clinicians-table">
                <div className='table-title'>
                    <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                    <h4> {t('CliniciansRequestsTable.heading')}({data.length})</h4>
                </div>
                {loading===true ? "Loading..." : 
                <>
                {data.length>0 ? 
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('CliniciansRequestsTable.tableCell1')}</TableCell>
                            <TableCell>{t('CliniciansRequestsTable.tableCell2')}</TableCell>
                            <TableCell>{t('CliniciansRequestsTable.tableCell3')}</TableCell>
                            <TableCell align="center">{t('CliniciansRequestsTable.tableCell4')}</TableCell>
                            <TableCell align="center">{t('CliniciansRequestsTable.tableCell5')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                       
                        {data?.length > 0 && data?.map((element) => (
                            <React.Fragment key={element.id}><ClinicianInfoRow data={element} /></React.Fragment>
                        ))}
                        
                    </TableBody>
                </Table> : <span>{t('CliniciansRequestsTable.notFound')}</span> }
                </>
                }
            </TableContainer>
        </>
    )
}
