import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';
// import { getClinicianData } from '../../services/ClinicianService';
import { useTranslation } from 'react-i18next';

export default function CliniciansRequestsTable(props) {
    const { value,clinicianStaff,recordsPerPage,currentPage,setCurrentPage} = props;
    const { t } = useTranslation();
    // const [loading, setLoading] = useState(false)

    const [data] = useState(clinicianStaff)
    
    

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    
    const nPages = Math.ceil(data.length / recordsPerPage)
    const handleChange = (event, value) => {
        
        setCurrentPage(value)
    };

    // useEffect(() => {
    //     setLoading(true)
    //     getClinicianData()

    //         .then((res) => {
    //             console.log(res)
    //             setData(res.data.data)
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setLoading(false)
    //         })
    // }, [])

   



    return (
        // actual code
        // <>
        //     <TableContainer component={Paper} className="clinicians-table">
        //         <div className='table-title'>
        //             <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
        //             <h4> {t('CliniciansRequestsTable.heading')}({data.length})</h4>
        //         </div>
        //         {loading===true ? "Loading..." : 
        //         <>
        //         {data.length>0 ? 
        //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell>{t('CliniciansRequestsTable.tableCell1')}</TableCell>
        //                     <TableCell>{t('CliniciansRequestsTable.tableCell2')}</TableCell>
        //                     <TableCell>{t('CliniciansRequestsTable.tableCell3')}</TableCell>
        //                     <TableCell align="center">{t('CliniciansRequestsTable.tableCell4')}</TableCell>
        //                     <TableCell align="center">{t('CliniciansRequestsTable.tableCell5')}</TableCell>
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>


        //                 {data?.length > 0 && data?.map((element) => (
        //                     <React.Fragment key={element.id}><ClinicianInfoRow data={element} /></React.Fragment>
        //                 ))}

        //             </TableBody>
        //         </Table> : <span>{t('CliniciansRequestsTable.notFound')}</span> }
        //         </>
        //         }
        //     </TableContainer>
        // </>

        // below code is for fakeData process
        <>
            <TableContainer component={Paper} className="clinicians-table">
                {value === 0 || value === 1 || value === 2 ? "" :
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


                            {currentRecords?.length > 0 && currentRecords?.map((element) => (
                                <React.Fragment key={element.id}><ClinicianInfoRow value={value} data={element} clinicianStaff={clinicianStaff}/></React.Fragment>
                            ))}



                        </TableBody>
                    </Table>

                </>

            </TableContainer>
            {currentRecords?.length === 0 ? "" :
                <Pagination page={currentPage} onChange={handleChange} count={nPages} variant="outlined" shape="rounded" className='table-pagination' />
            }
        </>

    )
}
