import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function TablePagination() {
  return (
    <>
        <Stack spacing={2} className="table-pagination">
            <Pagination count={1} variant="outlined" shape="rounded" />
        </Stack>
    </>
  )
}
