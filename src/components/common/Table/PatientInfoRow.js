import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import Bg from './Bg'
import Bo from './Bo'
import Bp from './Bp'
import Hr from './Hr'
import PatientInfo from './PatientInfo'
import Status from './Status'
import Temp from './Temp'
import Wt from './Wt'
import Sleep from './Sleep'
import Step from './Step'

export default function PatientInfoRow(props) {
  const {el,value,handleClickOpenRequestPopUp,handleClickStatus , DeleteRequest}=props;

  console.log('shubham',el);

  const navigate=useNavigate();
  const location=useLocation();
  const handleClicknavigate=()=>{
    if(location.pathname==="/dashboard" ||location.pathname==="/patients" || location?.pathname==='/adminpatient' || location?.pathname==='/cliniciandetails'){
      navigate("/patientdetails",{state:{
        id:el.userId,
      }})
    }
  }
 
  const DeleteAdminPatient =(id) =>{
    DeleteRequest(id)
  }
  return (
    <>
    <TableRow >
        {/* <TableCell onClick={handleClicknavigate}><PatientInfo el={el}/></TableCell> */}
        <TableCell onClick={handleClicknavigate}><PatientInfo el={el} handleClickOpenRequestPopUp={handleClickOpenRequestPopUp}  value={value} /></TableCell>
        <TableCell><Bp el={el} value={value} /></TableCell>
        <TableCell><Hr el={el} value={value} /></TableCell>
        <TableCell><Bo el={el} value={value} /></TableCell>
        <TableCell><Bg el={el}/></TableCell>
        <TableCell><Temp el={el}/></TableCell>
        {location?.pathname ==='/dashboard'?"":<TableCell><Wt el={el} value={value} /></TableCell>}
        {location?.pathname ==='/dashboard'?"":<TableCell><Sleep el={el} /></TableCell>}
        {location?.pathname ==='/dashboard'?"":<TableCell><Step el={el} /></TableCell>}
        {location?.pathname==='/adminpatient'?<TableCell onClick={()=>DeleteAdminPatient(el.id)}><DeleteIcon/></TableCell>: ""   }

      {location?.pathname==='/adminpatient'?"": <TableCell ><Status el={el} value={value} handleClickStatus={handleClickStatus}/></TableCell>}
    </TableRow>
    </>
  )
}
