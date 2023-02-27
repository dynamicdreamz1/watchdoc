import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { addDoctor } from '../../../services/ClinicianService';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ clinicianData }) {


    // const [status,setStatus]=useState(false)
    const [checkedClinicianIds, setCheckedClinicianIds] = useState([]);
    const { t } = useTranslation()

    const handleCheckboxChange = (id) => {
        setCheckedClinicianIds([...checkedClinicianIds, id]);
        addClinician(id);
    };


    const addClinician = (ID) => {
        console.log(ID)

        addDoctor(ID)
            .then((res) => {

                if (res.response.data.message === "User already has relation with the clinician") {
                    console.log(res.response.data.message)
                    // setStatus(true)
                }

                else {
                    console.log(res)
                }


            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <React.Fragment>

            <div className='practitioners-card'>
                {clinicianData?.data?.data.length === 0 ? <span style={{ color: "red" }}> {t('PractitionersCard.message1')}</span> :
                    <>
                        {clinicianData?.data?.data.length > 0 ? <h5>{t('PractitionersCard.heading1')}</h5> : ""}
                        {clinicianData?.data?.data.length > 0 && clinicianData.data?.data.map((element) =>

                            <div key={element.id}>
                                <div className='card d-flex'>
                                    <div className='user-image'>
                                        <img src={element.image} alt='User' />
                                    </div>
                                    <div className='text-block'>

                                        <h5>{element.first_name} {element.last_name}</h5>
                                        {element.hospital.map((hospitalValue) =>
                                            hospitalValue
                                        )} <br />
                                        {element.address}

                                        <div className='add-fav'  >
                                            <FormControlLabel onClick={() => addClinician(element.id)}
                                                control={
                                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                                                disabled={checkedClinicianIds.includes(element.id)}
                                                checked={checkedClinicianIds.includes(element.id)}
                                                onChange={() => handleCheckboxChange(element.id)}

                                                label=
                                                // status ? <span style={{color:"#FB7B04"}}>Pending clinician approval</span>: 
                                                "Add to WatchDoc" />
                                        </div>


                                    </div>
                                </div>
                            </div>)}
                    </>
                }
            </div>


        </React.Fragment>
    )
}
