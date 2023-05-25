import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ClinicianProfileBar from '../components/Clinician/ClinicianProfileBar'
import CriticalPatients from '../components/Clinician/Tables/CriticalPatients'
import Header from '../components/Templates/Header'
import Sidebar from '../components/Templates/Sidebar'
import { allInOneClinicianList} from '../services/AdminService'
import { Dialog } from '@mui/material'
import AddClinician from '../components/Admin/AddClinician'


const ClinicianDetails = () => {

  const location = useLocation();
  const { clinicianData ,allClinician} = location?.state;
  const [data,setData]=useState(allClinician)
  const [profileBarData,setProfileBarData]=useState(data?.filter((el)=>el?.id===clinicianData?.id))
  const [open, setOpen] = useState(false);
  const [viewAll] = useState(true)
  const  [openAddClinicianPopUp,setOpenAddClinicianPopUp]=useState(false)
  
  const getAllClinicianData=async()=>{    
   let response= await allInOneClinicianList()
    setProfileBarData(response?.data?.filter((el)=>el?.id===clinicianData?.id))
    setData(response?.data)
  }
  const handleClose = () => {
    setOpenAddClinicianPopUp(false);
  };


    // const [patientData] = useState([
    //     {
    //         "id": 1,
    //         "name": "Randerson, Michael",
    //         "age": "46 Year",
    //         "gender": "Male",
    //         "bp": "180/80",
    //         "date": new Date('2023-01-16T09:10:00'),
    //         "hr": "80bpm",
    //         "bo": "97%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "83.2Kg",
    //         "status": "Reviewed"
    //     },
    //     {
    //         "id": 2,
    //         "name": "johnson",
    //         "age": "23 Year",
    //         "gender": "Male",
    //         "bp": "170/70",
    //         "date": new Date('2023-01-25T10:10:00'),
    //         "hr": "70bpm",
    //         "bo": "77%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "53.2Kg",
    //         "status": "Reviewed"
    //     },
    //     {
    //         "id": 3,
    //         "name": "batitsta",
    //         "age": "12 Year",
    //         "gender": "Male",
    //         "bp": "160/60",
    //         "date": new Date('2023-02-01T12:10:00'),
    //         "hr": "60bpm",
    //         "bo": "67%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "33.2Kg",
    //         "status": "Reviewed"
    //     },
    //     {
    //         "id": 4,
    //         "name": "loosy",
    //         "age": "35 Year",
    //         "gender": "Female",
    //         "bp": "150/50",
    //         "date": new Date('2023-03-15T08:10:00'),
    //         "hr": "50bpm",
    //         "bo": "57%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "53.2Kg",
    //         "status": "Reviewed"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Georgia",
    //         "age": "55 Year",
    //         "gender": "Female",
    //         "bp": "155/50",
    //         "date": new Date('2023-03-24T09:20:00'),
    //         "hr": "56bpm",
    //         "bo": "69%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "93.2Kg",
    //         "status": "Reviewed"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Perry",
    //         "age": "33 Year",
    //         "gender": "Female",
    //         "bp": "159/40",
    //         "date": new Date('2023-03-18T06:30:00'),
    //         "hr": "51bpm",
    //         "bo": "58%",
    //         "bg": "No recording",
    //         "temp": "No recording",
    //         "wt": "43.2Kg",
    //         "status": "Reviewed"
    //     }
    // ]
    // )

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
          <AddClinician clinicianStaff={data} setOpen={setOpenAddClinicianPopUp} />
        </Dialog>
         </div>
          <ClinicianProfileBar open={open} setOpen={setOpen} profileBarData={profileBarData[0]} getAllClinicianData={getAllClinicianData}/>
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