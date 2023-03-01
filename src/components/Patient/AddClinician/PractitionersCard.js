import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';
import { addDoctor } from '../../../services/ClinicianService';
// import { UserContext } from '../../../components/Patient/AddClinician/AddClinician';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard({ clinicianData, status, setStatus }) {
    let data = [];
    data = clinicianData;
    const delay = 500; // anti-rebound for 500ms
    let lastExecution = 0;
    
    // const [data, setData] = useState(clinicianData)
    // console.log("data", data);
    // const { clinicianName, practitionerName, code } = useContext(UserContext);

    // const payload = {
    //     clinician_name: clinicianName,
    //     practice_name: practitionerName,
    //     zip: code
    // }

    // const addClinician = (ID, status) => {
    //     if (status !== 1) {
    //         addDoctor(ID)
    //             .then((res) => {
    //                 if (res.message === "message") {
    //                     searchClinician(payload)
    //                         .then((response) => {
    //                             // setData(response)
    //                             data = response;
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

    const addClinician = (ID) => {
        if ((lastExecution + delay) < Date.now()){
        
             addDoctor(ID)
            .then((res) => {
                console.log(res)
                setStatus(!status)

            })
            .catch((error) => {
                console.log(error)
            })
            lastExecution = Date.now() 
        }
        }
       
    

    return (
        <React.Fragment>

            <div className='practitioners-card'>
                {/* {clinicianData?.data?.data.length === 0 ? <span style={{ color: "red" }}> {t('PractitionersCard.message1')}</span> : */}
                <>
                    {/* {clinicianData?.data?.data.length > 0 ? <h5>{t('PractitionersCard.heading1')}</h5> : ""}  */}
                    {data?.data?.data?.data.map((element) =>

                        <div key={element.id}>
                            <div className='card d-flex'>
                                <div className='user-image'>

                                    {element?.user_data?.length > 0 && element.user_data.map((user_data) => (
                                        <>
                                            {user_data?.meta_key === "image" && <><img src={user_data?.meta_value} alt='User' /></>}
                                        </>
                                    ))}
                                </div>
                                <div className='text-block'>

                                    {element?.user_data?.length > 0 && element.user_data.map((user_data) => (
                                        <>
                                            {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                        </>
                                    ))}
                                    {element?.hospital?.length > 0 && element?.hospital.map((hospital) => (
                                        <>
                                            {
                                                hospital?.user_data?.length > 0 && hospital?.user_data.map((user_data) => (
                                                    <>
                                                        {user_data?.meta_key === "full_name" && <>{user_data?.meta_value}<br /></>}
                                                    </>
                                                ))
                                            }
                                        </>
                                    ))}
                                    {element?.user_data?.length > 0 && element.user_data.map((user_data) => (
                                        <>
                                            {user_data?.meta_key === "address" && <>{user_data?.meta_value}<br /></>}
                                        </>
                                    ))}

                                        {element.status}
                                    <div className='add-fav'  >

                                        <FormControlLabel onClickCapture={() => addClinician(element.id)}
                                            control={
                                                <Checkbox {...label} className={element?.status === 1 ? 'd-none' : ''} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}

                                            label={element?.status === 1 ? <span style={{ color: "#FB7B04" }}>Pending Clinician Approval</span> : "Add to WatchDoc"} />

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
