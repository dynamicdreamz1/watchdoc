import React, { useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import moment from 'moment'
import MainDetailsCardForBloodOxygen from '../../common/DetailCards/MainDetailsCardForBloodOxygen';
import AlertTriggerCardBloodOxygen from '../../common/DetailCards/AlertTriggerCardBloodOxygen'
import BloodOxygenChartNavTabs from './BloodOxygenChartNavTabs';
import { toast } from 'react-toastify';
import AlertTriggerCardModel from '../../common/DetailCards/AlertTriggerCardModel';
import { bloodOxygenDataData } from '../../../Utility/DefaultObject';
import { addMissingObjects } from '../../../Utility/functions';
import { updatedAlertTriggerData } from '../../../services/AdminService';

export default function PatientBloodOxygenDetails({ terraId, latestData }) {
  const start = moment().format('YYYY-MM-DD');
  const [timeType, setTimeType] = useState('daily')
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [isBloodOxygenSkeleton, setIsBloodOxygenSkeleton] = useState(false);
  const [openTriggerModel, setOpenTriggerModel] = useState(false)
  const [openTriggerType, setOpenTriggerType] = useState("")
  const [bloodOxygenData, setBloodOxygenData] = useState()
  const [openTriggerResponseFlag, setOpenTriggerResponseFlag] = useState(false)

  const triggerData = addMissingObjects(bloodOxygenDataData, bloodOxygenData?.data.blood_oxygen_criteria && bloodOxygenData?.data.blood_oxygen_criteria)


  const fetchData = async () => {
    try {
      setIsBloodOxygenSkeleton(true);
      if (timeType && FinalDate) {
        const result = await GetUserBloodOxyenData(timeType, terraId, FinalDate);
        setBloodOxygenData(result);
        setIsBloodOxygenSkeleton(false);
      }
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      setIsBloodOxygenSkeleton(false);
    }
  };

  const updatedAlertTrigger = async (triggerValue) => {
    try {
      const formData = new FormData();
      setOpenTriggerResponseFlag(true)
      formData.append(openTriggerType, triggerValue === "OFF" ? "off" : triggerValue);
      formData.append("user_id", latestData.user_data.id);
      const result = await updatedAlertTriggerData(formData);
      await fetchData()
      if (result) {
        setOpenTriggerModel(false)
        openTriggerResponseFlag(false)
      }
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const openTrigger = (type) => {
    setOpenTriggerType(type)
    setOpenTriggerModel(true)
  }
  const handleClose = () => {
    setOpenTriggerModel(false)
  }



  useEffect(() => {
    if (terraId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, FinalDate]);

  const titleAction = {
    isBloodOxygenSkeleton,
    bloodOxygenData,
    setTimeType,
    Date,
    setFinalDate,
    setBloodOxygenData,
    latestData
  }

  return (
    <>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          <MainDetailsCardForBloodOxygen titleAction={titleAction} />
          {/* <ShowAllDataCard  /> */}
          <AlertTriggerCardModel
            openTriggerResponseFlag={openTriggerResponseFlag}
            updatedAlertTrigger={updatedAlertTrigger}
            openTriggerType={"Blood-oxigen"}
            handleClose={handleClose}
            openTriggerModel={openTriggerModel}
          />


          {triggerData && triggerData?.map((el, I) => {
            return (
              <AlertTriggerCardBloodOxygen openTriggerModel={openTrigger} el={el} key={I} />
            )
          })
          }
        </div>
        <div className='chart-wrapper'>
          <BloodOxygenChartNavTabs titleAction={titleAction} />
        </div>
      </div>
    </>
  )
}
