import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { addDoctor } from '../../../services/ClinicianService';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ clinicianData, status, setStatus }) {


    


    const addClinician = (ID) => {

        console.log(ID)

        addDoctor(ID)
            .then((res) => {

                if (res.response.data.message === "User already has relation with the clinician") {
                    console.log(res.response.data.message)
                    setStatus(true)
                 
                }
                    
                else {
                    console.log(res)
                    setStatus(true)


                }


            })
            .catch((error) => {
                console.log(error)
            })
        }
    console.log(clinicianData)
    return (
        <React.Fragment>

            <div className='practitioners-card'>
                {/* {clinicianData?.data?.data.length === 0 ? <span style={{ color: "red" }}> {t('PractitionersCard.message1')}</span> : */}
                    <>
                         {/* {clinicianData?.data?.data.length > 0 ? <h5>{t('PractitionersCard.heading1')}</h5> : ""}  */}
                         {clinicianData?.data?.data?.data.map((element) =>
                  
                            <div key={element.id}>
                                <div className='card d-flex'>
                                    <div className='user-image'>
                                        <img src='' alt='User' />
                                    </div>
                                    <div className='text-block'>
                                        <h5>{element.user_data[0].meta_value}</h5>
                                      

                                        {element.hospital[0].user_data[0].meta_value}
                                    
                                            <div className='add-fav'  >

                                                <FormControlLabel onClick={() => addClinician(element.id)}
                                                    control={
                                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

                                                    label={status === true ? <span style={{ color: "#FB7B04" }}>Pending Clinician Approval</span> : "Add to WatchDoc"} />

                                            </div>

                                        {/* } */}

                                    </div>
                                </div>
                             </div>)} 
                        
                    </>
                {/* } */}
            </div>


        </React.Fragment>
    )
}
