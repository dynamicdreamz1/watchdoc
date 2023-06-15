import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import ClinicianProfileBar from '../components/Clinician/ClinicianProfileBar'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'
import {getParticularClinicianDetails} from '../services/AdminService'
import { Dialog } from '@mui/material'
import AddClinician from '../components/Admin/AddClinician'
import { ChartResultRange } from '../Utility/Skeleton'


const ClinicianDetails = () => {
  const location = useLocation();
  const { id} = location?.state;
  const [profileBarData,setProfileBarData]=useState([])
  const [open, setOpen] = useState(false);
  const [viewAll] = useState(true)
  const  [openAddClinicianPopUp,setOpenAddClinicianPopUp]=useState(false)
  const [loading,setLoading]=useState(false)


const getClinicianDetail=async()=>{
    setLoading(true)
    const res=await getParticularClinicianDetails(id);
    if(res?.status===200){
        setProfileBarData(res?.data?.data)
    }
    setLoading(false)
}

useEffect(()=>{
    getClinicianDetail()
},[id])


  const handleClose = () => {
    setOpenAddClinicianPopUp(false);
  };


    const [patientData] = useState(
      [     
        {
            "id": 1,
            "name": "sanjay patel",
            "first_name": "sanjay",
            "last_name": "patel",
            "age": "No recording",
            "gender": "male",
            "status": "Reviewed",
            "metaData": {
                "heart_rate": {
                    "date": "11-05-23 05:50:21",
                    "count": 74
                },
                "blood_pressure": {
                    "date": "11-05-23 01:00:09",
                    "count": "110/90"
                },
                "blood_oxygen": {
                    "date": "11-05-23 01:00:09",
                    "count": 96
                },
                "sleep": {
                    "date": "11-05-23 12:21:31",
                    "count": 28080
                },
                "weight": {
                    "date": "11-05-23 01:00:09",
                    "count": 65
                },
                "step": {
                    "date": "16-05-23 12:00:00",
                    "count": 0
                },
                "temperature": {
                    "date": "11-05-23 12:16:22",
                    "count": 39
                }
            }
        },
        {
            "id": 2,
            "name": "sanjay patel",
            "first_name": "sanjay",
            "last_name": "patel",
            "age": "No recording",
            "gender": "male",
            "status": "Reviewed",
            "metaData": {
                "heart_rate": {
                    "date": "11-05-23 05:50:21",
                    "count": 74
                },
                "blood_pressure": {
                    "date": "11-05-23 01:00:09",
                    "count": "110/90"
                },
                "blood_oxygen": {
                    "date": "11-05-23 01:00:09",
                    "count": 96
                },
                "sleep": {
                    "date": "11-05-23 12:21:31",
                    "count": 28080
                },
                "weight": {
                    "date": "11-05-23 01:00:09",
                    "count": 65
                },
                "step": {
                    "date": "16-05-23 12:00:00",
                    "count": 0
                },
                "temperature": {
                    "date": "11-05-23 12:16:22",
                    "count": 39
                }
            }
        },
        {
            "id": 3,
            "name": "sanjay patel",
            "first_name": "sanjay",
            "last_name": "patel",
            "age": "No recording",
            "gender": "male",
            "status": "Reviewed",
            "metaData": {
                "heart_rate": {
                    "date": "11-05-23 05:50:21",
                    "count": 74
                },
                "blood_pressure": {
                    "date": "11-05-23 01:00:09",
                    "count": "110/90"
                },
                "blood_oxygen": {
                    "date": "11-05-23 01:00:09",
                    "count": 96
                },
                "sleep": {
                    "date": "11-05-23 12:21:31",
                    "count": 28080
                },
                "weight": {
                    "date": "11-05-23 01:00:09",
                    "count": 65
                },
                "step": {
                    "date": "16-05-23 12:00:00",
                    "count": 0
                },
                "temperature": {
                    "date": "11-05-23 12:16:22",
                    "count": 39
                }
            }
        },
        {
            "id": 4,
            "name": "sanjay patel",
            "first_name": "sanjay",
            "last_name": "patel",
            "age": "No recording",
            "gender": "male",
            "status": "Reviewed",
            "metaData": {
                "heart_rate": {
                    "date": "11-05-23 05:50:21",
                    "count": 74
                },
                "blood_pressure": {
                    "date": "11-05-23 01:00:09",
                    "count": "110/90"
                },
                "blood_oxygen": {
                    "date": "11-05-23 01:00:09",
                    "count": 96
                },
                "sleep": {
                    "date": "11-05-23 12:21:31",
                    "count": 28080
                },
                "weight": {
                    "date": "11-05-23 01:00:09",
                    "count": 65
                },
                "step": {
                    "date": "16-05-23 12:00:00",
                    "count": 0
                },
                "temperature": {
                    "date": "11-05-23 12:16:22",
                    "count": 39
                }
            }
        },
        {
            "id": 5,
            "name": "sanjay patel",
            "first_name": "sanjay",
            "last_name": "patel",
            "age": "No recording",
            "gender": "male",
            "status": "Reviewed",
            "metaData": {
                "heart_rate": {
                    "date": "11-05-23 05:50:21",
                    "count": 74
                },
                "blood_pressure": {
                    "date": "11-05-23 01:00:09",
                    "count": "110/90"
                },
                "blood_oxygen": {
                    "date": "11-05-23 01:00:09",
                    "count": 96
                },
                "sleep": {
                    "date": "11-05-23 12:21:31",
                    "count": 28080
                },
                "weight": {
                    "date": "11-05-23 01:00:09",
                    "count": 65
                },
                "step": {
                    "date": "16-05-23 12:00:00",
                    "count": 0
                },
                "temperature": {
                    "date": "11-05-23 12:16:22",
                    "count": 39
                }
            }
        },
        
    ])
const [pendingPatientsData]=useState(
  [     
    {
        "id": 1,
        "name": "sanjay patel",
        "first_name": "sanjay",
        "last_name": "patel",
        "age": "No recording",
        "gender": "male",
        "status": "Pending",
        "metaData": {
            "heart_rate": {
                "date": "11-05-23 05:50:21",
                "count": 74
            },
            "blood_pressure": {
                "date": "11-05-23 01:00:09",
                "count": "110/90"
            },
            "blood_oxygen": {
                "date": "11-05-23 01:00:09",
                "count": 96
            },
            "sleep": {
                "date": "11-05-23 12:21:31",
                "count": 28080
            },
            "weight": {
                "date": "11-05-23 01:00:09",
                "count": 65
            },
            "step": {
                "date": "16-05-23 12:00:00",
                "count": 0
            },
            "temperature": {
                "date": "11-05-23 12:16:22",
                "count": 39
            }
        }
    },
    {
        "id": 2,
        "name": "sanjay patel",
        "first_name": "sanjay",
        "last_name": "patel",
        "age": "No recording",
        "gender": "male",
        "status": "Pending",
        "metaData": {
            "heart_rate": {
                "date": "11-05-23 05:50:21",
                "count": 74
            },
            "blood_pressure": {
                "date": "11-05-23 01:00:09",
                "count": "110/90"
            },
            "blood_oxygen": {
                "date": "11-05-23 01:00:09",
                "count": 96
            },
            "sleep": {
                "date": "11-05-23 12:21:31",
                "count": 28080
            },
            "weight": {
                "date": "11-05-23 01:00:09",
                "count": 65
            },
            "step": {
                "date": "16-05-23 12:00:00",
                "count": 0
            },
            "temperature": {
                "date": "11-05-23 12:16:22",
                "count": 39
            }
        }
    },
    {
        "id": 3,
        "name": "sanjay patel",
        "first_name": "sanjay",
        "last_name": "patel",
        "age": "No recording",
        "gender": "male",
        "status": "Pending",
        "metaData": {
            "heart_rate": {
                "date": "11-05-23 05:50:21",
                "count": 74
            },
            "blood_pressure": {
                "date": "11-05-23 01:00:09",
                "count": "110/90"
            },
            "blood_oxygen": {
                "date": "11-05-23 01:00:09",
                "count": 96
            },
            "sleep": {
                "date": "11-05-23 12:21:31",
                "count": 28080
            },
            "weight": {
                "date": "11-05-23 01:00:09",
                "count": 65
            },
            "step": {
                "date": "16-05-23 12:00:00",
                "count": 0
            },
            "temperature": {
                "date": "11-05-23 12:16:22",
                "count": 39
            }
        }
    },
    {
        "id": 4,
        "name": "sanjay patel",
        "first_name": "sanjay",
        "last_name": "patel",
        "age": "No recording",
        "gender": "male",
        "status": "Pending",
        "metaData": {
            "heart_rate": {
                "date": "11-05-23 05:50:21",
                "count": 74
            },
            "blood_pressure": {
                "date": "11-05-23 01:00:09",
                "count": "110/90"
            },
            "blood_oxygen": {
                "date": "11-05-23 01:00:09",
                "count": 96
            },
            "sleep": {
                "date": "11-05-23 12:21:31",
                "count": 28080
            },
            "weight": {
                "date": "11-05-23 01:00:09",
                "count": 65
            },
            "step": {
                "date": "16-05-23 12:00:00",
                "count": 0
            },
            "temperature": {
                "date": "11-05-23 12:16:22",
                "count": 39
            }
        }
    },
    {
        "id": 5,
        "name": "sanjay patel",
        "first_name": "sanjay",
        "last_name": "patel",
        "age": "No recording",
        "gender": "male",
        "status": "Pending",
        "metaData": {
            "heart_rate": {
                "date": "11-05-23 05:50:21",
                "count": 74
            },
            "blood_pressure": {
                "date": "11-05-23 01:00:09",
                "count": "110/90"
            },
            "blood_oxygen": {
                "date": "11-05-23 01:00:09",
                "count": 96
            },
            "sleep": {
                "date": "11-05-23 12:21:31",
                "count": 28080
            },
            "weight": {
                "date": "11-05-23 01:00:09",
                "count": 65
            },
            "step": {
                "date": "16-05-23 12:00:00",
                "count": 0
            },
            "temperature": {
                "date": "11-05-23 12:16:22",
                "count": 39
            }
        }
    },
    
])
    const handleClickReview = (data) => {
        // const filterData = patientData?.filter((el) => el?.id === data?.id)
        // const finalData = patientData?.filter((el) => el?.id !== data?.id)
        // setPatientData(finalData)
        // const tempData = filterData.map((el) => {
        //     el.status = "Reviewed"
        //     return el;
        // })

        // const mulitReviewData = [...reviewData, ...tempData]
        // setReviewData(mulitReviewData)
    }

    // const handleClickUnReview = (data) => {
        // const filterData = reviewData?.filter((el) => el?.id !== data?.id)
        // const tempData = [{ ...data, "status": "UnReviewed" }]
        // setPatientData(patientData.concat(tempData))
        // setReviewData(filterData)

    // }
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Sidebar/>
        <div className='aside'>
          <Header setOpen={setOpenAddClinicianPopUp}/>
         <div>
         <Dialog
          open={openAddClinicianPopUp}
          onClose={handleClose}
          aria-labelledby="add-staff-user-dialog"
          aria-describedby="add-staff-user-dialog"
          className='add-staff-user-dialog'
        >
          <button type='button' className='close-btn' onClick={handleClose}><img src='/images/Close-Icon.svg' alt='Close Button' /></button>
          <AddClinician  setOpen={setOpenAddClinicianPopUp} />
        </Dialog>
         </div>
          {loading ? <ChartResultRange /> :<ClinicianProfileBar open={open} setOpen={setOpen} profileBarData={profileBarData} getClinicianDetail={getClinicianDetail}/>}
          <CriticalPatients patientData={patientData} handleClickStatus={handleClickReview} viewAll={viewAll} />
          <div className="pp-table">
            <div className='table-title'>
              <h4>Patients Pending</h4>
            </div>
            <CriticalPatients patientData={pendingPatientsData} handleClickStatus={handleClickReview} viewAll={viewAll} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ClinicianDetails