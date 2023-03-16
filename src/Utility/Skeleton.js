import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const ClinicianCard = () => {
    const totalUser=[1,2,3];
    return(
        <>
        {totalUser?.map((el,I)=>{
            return(
                <Stack spacing={1} className="clinician-card-skeleton" key={I}>
                <div className="card d-flex">
                    <div className="user-image">
                        <Skeleton variant="circular" />
                    </div>
                    <div className="text-block">
                        <Skeleton variant="rectangular" className='title'/>
                        <Skeleton variant="rectangular" className='sub-title'/>
                    </div>
                </div>
            </Stack>

            )
        })
           
}
        </>
    )
}

export const ChartResultRange = () => {
    return(
        <>
            <Stack spacing={1} className="chart-result-skeleton">
                <Skeleton variant="rectangular" width={200} height={50}/>
            </Stack>
        </>
    )
}

export const ChartSkeleton = () => {
    return(
        <>
            <Stack spacing={1} className="chart-skeleton">
                <Skeleton variant="rectangular" height={300}/>
            </Stack>
        </>
    )
}

export const NoDataRecordedSkeleton = () => {
    return(
        <>
            <Stack spacing={1} className="no-data-recorded-skeleton d-flex align-items-center">
                <span className="icon d-flex">
                    <Skeleton variant="circular" width={12} height={12} />
                </span>
                <span className="text">
                    <Skeleton variant="text" />
                </span>
            </Stack>
        </>
    )
}

export const ReminderCardSkeleton = () => {
    return(
        <>
            <Stack spacing={1} className="reminder-card-skeleton">
                <div className='icon-block'>
                    <div className='reminder-icon'>
                        <Skeleton variant="rectangular" height={94}/>
                    </div>
                </div>
                <div className="content-block">
                    <div className="r-title">
                        <Skeleton variant="text" />
                    </div>
                    <div className="days">
                        <Skeleton variant="rectangular" height={29} />
                    </div>
                    <div className="reminder-date">
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    </div>
                </div>
            </Stack>
        </>
    )
}

export const MeasurmentCardSkeleton = ()=> {
    return (
        <>
            <Stack spacing={1} className="measurment-skeleton">
                <div className="m-status">
                    <Skeleton variant="circular" width={10} height={10} />
                </div>
                <div className='measurment-title d-flex align-items-center'>
                    <span className='icon d-flex'><Skeleton variant="circular" width={16} height={16} /></span>
                    <span className='name d-flex'><Skeleton variant="text" /></span>
                </div>
                <div className='measurment-result'>
                    <span className='digit'><Skeleton variant="text" height={45}/></span>
                </div>
                <div className='mlr'>
                    <span className='text'><Skeleton variant="text" /></span>
                </div>
            </Stack>
        </>
    )
}

export const TableSkeleton = ()=>  {
  return (
    <>
        <Stack spacing={1}>
            <TableContainer component={Paper} className="table-skeleton">
                <Table sx={{ minWidth: 650 }} aria-label="Skeleton Table">
                    <TableHead>
                        <TableRow>
                            <TableCell width="20%"><Skeleton variant="text" /></TableCell>
                            <TableCell width="20%"><Skeleton variant="text" /></TableCell>
                            <TableCell width="20%"><Skeleton variant="text" /></TableCell>
                            <TableCell width="20%"><Skeleton variant="text" /></TableCell>
                            <TableCell width="20%"><Skeleton variant="text" /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className='profile-skeleton'>
                                    <div className='user-avtar'>
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </div>
                                    <div className='user-info'>
                                        <Skeleton variant="text"/>
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='profile-skeleton'>
                                    <div className='user-avtar'>
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </div>
                                    <div className='user-info'>
                                        <Skeleton variant="text"/>
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='profile-skeleton'>
                                    <div className='user-avtar'>
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </div>
                                    <div className='user-info'>
                                        <Skeleton variant="text"/>
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='profile-skeleton'>
                                    <div className='user-avtar'>
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </div>
                                    <div className='user-info'>
                                        <Skeleton variant="text"/>
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                            <TableCell><Skeleton variant="text" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    </>
  )
}
