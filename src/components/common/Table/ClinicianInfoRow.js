import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox, FormControlLabel, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import Email from './Email'
import PendingPatients from './PendingPatients'
import Phone from './Phone'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ClinicianInfoRow({ value, data, clinicianStaff }) {
  const { t } = useTranslation();
  const location = useLocation()
  return (
    <>
      <TableRow>
        <TableCell><ClinicianInfo data={data} clinicianStaff={clinicianStaff} /></TableCell>
        {location.pathname === "/patientdetails" ? "" : <TableCell><Email email={data?.email} /></TableCell>}
        <TableCell><Phone data={data} /></TableCell>
        {value === 0 ? "" :
          <>
            {location.pathname === "/patientdetails" ? "" : <TableCell align='center'><ConnectedPatients /></TableCell>}
            {location.pathname === "/patientdetails" ? "" : <TableCell align='center'><PendingPatients /></TableCell>}
          </>
        }

      </TableRow>
      <FormControlLabel
        control={
          <Checkbox {...label} className={data?.status === 1 ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

        label={data?.status === 1 ? <span className='btn_status'> {t('PractitionersCard.buttonOption2')} </span> : t('PractitionersCard.buttonOption1')} />
    </>
  )
}
