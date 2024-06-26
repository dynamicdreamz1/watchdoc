import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox, FormControlLabel, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import ClinicianInfo from './ClinicianInfo'
import ConnectedPatients from './ConnectedPatients'
import { deletePatientAndClinician } from "../../../services/AdminService"
import Email from './Email'
import PendingPatients from './PendingPatients'
import DeleteIcon from '@mui/icons-material/Delete';
import Phone from './Phone'
import Swal from 'sweetalert2';
import Status from './Status'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ClinicianInfoRow({ value, setSearchData, data, clinicianStaff, getClinicianData, currentPage, recordsPerPage, handleClickStatus }) {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const location = useLocation()

  const handleClickClinicianDetailPage = () => {
    navigate("/cliniciandetails", {
      state: {
        id: data?.id,
      }
    })
  }

  const DeleteRequest = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this clinician!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete operation
        const apiData = {
          id: id,
          role: 'clinician'
        }
        deletePatientAndClinician(apiData)
          .then((res) => {
            if (res) {
              getClinicianData(recordsPerPage, currentPage)
            }
          })
          .catch((error) => {
            console.log(error)
          })
          if (setSearchData) {
            setSearchData("")
          }
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });

  }


  return (
    <>
      <TableRow >
        <TableCell onClick={handleClickClinicianDetailPage}><ClinicianInfo data={data} clinicianStaff={clinicianStaff} /></TableCell>
        {location.pathname === "/patientdetails" ? "" : <TableCell><Email email={data?.email || ""} /></TableCell>}
        {location.pathname === "/patientdetails" ? "" : <TableCell><Phone data={data || ""} /></TableCell>}
        {location?.pathname === '/dashboard' ?
          <TableCell ><Status el={data} value={`5`} handleClickStatus={handleClickStatus} /></TableCell>
          :
          <>
            <TableCell align='center'><ConnectedPatients data={data} /></TableCell>
            <TableCell align='center'><PendingPatients data={data} /></TableCell>
          </>
        }
        <TableCell onClick={() => DeleteRequest(data.id)} align='center'><DeleteIcon /></TableCell>


      </TableRow>
      {location?.pathname === "/patientdetails" &&
        <FormControlLabel
          control={
            <Checkbox {...label} className={data?.status === 1 ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

          label={data?.status === 1 ? <span className='btn_status'> {t('PractitionersCard.buttonOption2')} </span> : t('PractitionersCard.buttonOption1')} />
      }
    </>
  )
}
