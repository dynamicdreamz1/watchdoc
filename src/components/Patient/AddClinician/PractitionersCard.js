import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { addDoctor } from '../../../services/ClinicianService';
// import { UserContext } from '../../../components/Patient/AddClinician/AddClinician';
import '../../../css/PractitionersCard.css'
import { useTranslation } from 'react-i18next';
// import { UserContext } from './AddClinician';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ clinicianData, status, setStatus,setClinicianData }) {
    // const [btnStatus,setBtnStatus]=useState(false)
    const { t } = useTranslation();
    let data = [];
    data = clinicianData;
    const delay = 500; 
    let lastExecution = 0;
    // const id = ''

    // console.log(btnStatus)
 
    // const data2 = useContext(UserContext);

   
    // console.log(data2)
    // useEffect(()=>{
    //     const payload = {
    //         clinician_name: data2?.clinicianName,
    //         practice_name: data2?.practitionerName,
    //         zip: data2?.code
    //     }


    //   if(data2?.clinicianName) {
    //      searchClinician(payload)
    //     .then((res) => {
    //         console.log(res)
    //         setClinicianData(res)
           
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
    //   },[btnStatus])
      
    // const addClinician = (ID, status) => {
    //     if (status !== 1) {
    //         addDoctor(ID)
    //             .then((res) => {
    //                 if (res.message === "message") {
    //                     searchClinician(payload)
    //                         .then((response) => {
    //                             // setData(response)
    //                             data = response?.data?.data;
    //                         })

    //                         .catch((error) => {
    //                             console.log(error)

    //                         })
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })

    //     }

    // }

    // correct code
    const addClinician = (ID) => {
        if ((lastExecution + delay) < Date.now()) {
            // setID(...id,{ID})
          
            
          

            addDoctor(ID)
                .then((res) => {
                    console.log(res)
                    setStatus(!status)
            // setBtnStatus(!btnStatus)


                })
                .catch((error) => {
                    console.log(error)
                })
            lastExecution = Date.now()
        }
    }

    // console.log(id, "asddasdasasdd");



    return (
        <React.Fragment>

            <div className='practitioners-card'>
                {data?.data?.data.length === 0 ? <span style={{ color: "red" }}>{t('PractitionersCard.message1')}</span> : ""}
                <>

                    {data?.data?.data?.data?.length > 0 && data?.data?.data?.data.map((element) =>

                        <div key={element.id}>
                            <div className='card d-flex'>
                                <div className='user-image'>

                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>

                                            {user_data?.meta_key === "image" && <><img src={user_data?.meta_value} alt='User' /></>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className='text-block'>

                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>
                                            {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                        </React.Fragment>
                                    ))}
                                    {element?.hospital?.length > 0 && element?.hospital.map((hospital) => (
                                        <React.Fragment key={hospital.id}>
                                            {
                                                hospital?.meta_data?.length > 0 && hospital?.meta_data.map((user_data) => (
                                                    <React.Fragment key={user_data.id}>
                                                        {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </React.Fragment>
                                    ))}
                                    {element?.meta_data?.length > 0 && element.meta_data.map((user_data) => (
                                        <React.Fragment key={user_data.id}>
                                            {user_data?.meta_key === "address" && <>{user_data?.meta_value}<br /></>}
                                        </React.Fragment>
                                    ))}


                                    <div className='add-fav'  >

                                        <FormControlLabel onClickCapture={() => { addClinician(element.id, element.status)}}
                                            control={
                                                <Checkbox {...label} className={element?.status === 1  ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

                                            label={element?.status === 1  ? <span style={{ color: "#FB7B04" }}>Pending Clinician Approval</span> : "Add to WatchDoc"} />


                                    </div>


                                </div>
                            </div>
                        </div>)}

                </>
                {/* } */}
            </div>


        </React.Fragment>
    )
}
