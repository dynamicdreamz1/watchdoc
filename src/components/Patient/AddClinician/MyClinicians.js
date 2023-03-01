import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import UserProfile from '../../common/UserProfile';
import Email from '../../common/Table/Email';
import Phone from '../../common/Table/Phone';
import { getClinicianData } from '../../../services/ClinicianService';


export default function MyClinicians({status}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getClinicianData()

            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data)
                   setLoading(false)

            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [status])
    return (
        <>
            <TableContainer component={Paper} className="clinicians-table">
                <div className='table-title'>
                    <img src='/images/Clinicians-icon.svg' alt='Clinicians-icon' />
                    <h4>My Clinicians</h4>
                </div>
                
               
                {loading===true ? "Loading..." :   
                <>
                {data.length> 0 ?  
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.length > 0 && data?.map((el) => (
                            <TableRow key={el.id}>
                                <TableCell className='user-profile-cell'>
                                    <UserProfile data={el?.user_data} />
                                </TableCell>
                                <TableCell>
                                    <Email email={el?.email}  />
                                </TableCell>
                                <TableCell>
                                    <Phone number={el?.contact_number} />
                                </TableCell>
                                <TableCell align="center">Pending</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>  : "You have not added any clinician yet."} 
                </>
                }
 
            </TableContainer>
        </>
    )
}
