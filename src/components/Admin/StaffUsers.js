import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

function createData(Name, Email, Phone, LastLogin) {
    return { Name, Email, Phone, LastLogin };
}
  
const StaffUser = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function StaffUsers() {
  return (
    <>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {StaffUser.map((data) => (
                <TableRow
                    key={data.Name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {data.Name}
                    </TableCell>
                    <TableCell align="right">{data.Email}</TableCell>
                    <TableCell align="right">{data.Phone}</TableCell>
                    <TableCell align="right">{data.LastLogin}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
