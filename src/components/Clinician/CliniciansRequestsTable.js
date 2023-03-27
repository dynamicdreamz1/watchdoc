import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import ClinicianInfoRow from '../common/Table/ClinicianInfoRow';
// import { getClinicianData } from '../../services/ClinicianService';
import { useTranslation } from 'react-i18next';

export default function CliniciansRequestsTable(props) {
    const { value } = props;
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    const { t } = useTranslation();
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

    const obj = [
        {
            "id": 3,
            "email": "drarpit@gmail.com",
            "email_verified_at": null,
            "t&c": 0,
            "profile_created": 0,
            "contact_number": null,
            "mobile_num_verify": 0,
            "is_active": 0,
            "verification_code": 1691,
            "terra_user_id": null,
            "created_at": "2023-02-27T06:09:21.000000Z",
            "updated_at": "2023-02-27T06:09:21.000000Z",
            "hospital": [
                {
                    "id": 5,
                    "email": "generalhospital@gmail.com",
                    "email_verified_at": "2023-03-23T12:55:55.000000Z",
                    "t&c": 0,
                    "profile_created": 0,
                    "contact_number": "54544556565",
                    "mobile_num_verify": 0,
                    "is_active": 1,
                    "verification_code": 243725,
                    "terra_user_id": null,
                    "created_at": "2023-02-27T06:10:48.000000Z",
                    "updated_at": "2023-03-23T12:55:55.000000Z",
                    "hospital": [],
                    "meta_data": [
                        {
                            "id": 5,
                            "meta_key": "full_name",
                            "meta_value": "general hospital",
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            ],
            "meta_data": [
                {
                    "id": 6,
                    "meta_key": "full_name",
                    "meta_value": "Dr arpit"
                },
                {
                    "id": 8,
                    "meta_key": "zip",
                    "meta_value": "395002"
                },
                {
                    "id": 201,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
                },
                {
                    "id": 209,
                    "meta_key": "address",
                    "meta_value": "594 Rafe Lane , Southaven , Mississippi."
                }
            ]
        },
        {
            "id": 7,
            "email": "drjevin@gmail.com",
            "email_verified_at": "2023-03-24T10:55:51.000000Z",
            "t&c": 0,
            "profile_created": 0,
            "contact_number": "54544556565",
            "mobile_num_verify": 0,
            "is_active": 1,
            "verification_code": 953963,
            "terra_user_id": null,
            "created_at": "2023-02-28T00:05:29.000000Z",
            "updated_at": "2023-03-24T10:55:51.000000Z",
            "hospital": [
                {
                    "id": 9,
                    "email": "dynamichospital@gmail.com",
                    "email_verified_at": null,
                    "t&c": 0,
                    "profile_created": 0,
                    "contact_number": null,
                    "mobile_num_verify": 0,
                    "is_active": 0,
                    "verification_code": 1238,
                    "terra_user_id": null,
                    "created_at": "2023-02-28T00:06:40.000000Z",
                    "updated_at": "2023-02-28T00:06:40.000000Z",
                    "hospital": [],
                    "meta_data": [
                        {
                            "id": 10,
                            "meta_key": "full_name",
                            "meta_value": "dynamic hospital",
                            "created_at": null,
                            "updated_at": null
                        }
                    ]
                }
            ],
            "meta_data": [
                {
                    "id": 11,
                    "meta_key": "full_name",
                    "meta_value": "Dr jevin"
                },
                {
                    "id": 13,
                    "meta_key": "zip",
                    "meta_value": "1234"
                },
                {
                    "id": 207,
                    "meta_key": "image",
                    "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
                },
                {
                    "id": 211,
                    "meta_key": "address",
                    "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
                }
            ]
        }
    ]



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
                        <h4> {t('CliniciansRequestsTable.heading')}({obj.length})</h4>
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


                            {obj?.length > 0 && obj?.map((element) => (
                                <React.Fragment key={element.id}><ClinicianInfoRow value={value} data={element} /></React.Fragment>
                            ))}



                        </TableBody>
                    </Table>

                </>

            </TableContainer>
        </>

    )
}
