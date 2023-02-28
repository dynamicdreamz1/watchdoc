import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

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
