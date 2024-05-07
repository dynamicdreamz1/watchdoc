import React, { useEffect, useState } from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { GetUserHeartRateData } from '../../../services/HelthData'
import { updatedAlertTriggerData } from '../../../services/AdminService';
import moment from 'moment'
import { defaultMainCardData, heartTrigger } from '../../../Utility/DefaultObject'
import { toast } from 'react-toastify'
import AlertTriggerCardModel from '../../common/DetailCards/AlertTriggerCardModel'
import { addMissingObjects } from '../../../Utility/functions'


export default function PatientHeartRateDetails({ terraId, latestData }) {
  const start = moment().format('YYYY-MM-DD');
  const [heartRateValue, setHeartRateValue] = useState()
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [timeType, setTimeType] = useState('daily')
  const [isHeartrateSkeleton, setIsHeartrateSkeleton] = useState(false)
  const [openTriggerModel, setOpenTriggerModel] = useState(false)
  const [openTriggerType, setOpenTriggerType] = useState("")
  const [openTriggerResponseFlag, setOpenTriggerResponseFlag] = useState(false)


  const triggerData = addMissingObjects(heartTrigger, heartRateValue?.data?.heart_criteria && heartRateValue?.data?.heart_criteria)


  const fetchData = async () => {
    try {
      setIsHeartrateSkeleton(true);
      if (timeType && FinalDate) {
        const result = await GetUserHeartRateData(timeType, terraId, FinalDate);
        setHeartRateValue(result);
        setIsHeartrateSkeleton(false);
      }
    } catch (error) {
      setIsHeartrateSkeleton(false);
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

  const updatedAlertTrigger = async (triggerValue) => {
    try {
      setOpenTriggerResponseFlag(true)
      const formData = new FormData();
      formData.append(openTriggerType, triggerValue === "OFF" ? "off" : triggerValue);
      formData.append("user_id", latestData.user_data.id);
      const result = await updatedAlertTriggerData(formData);
      await fetchData()
      if (result) {
        setOpenTriggerModel(false)
        setOpenTriggerResponseFlag(false)
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
      fetchData()
    }
  }, [terraId, FinalDate]);


  const action = {
    isHeartrateSkeleton,
    setTimeType,
    HeartRateAvg: heartRateValue,
    setHeartRateValue,
    setFinalDate,
  }


  return (
    <>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          {defaultMainCardData && defaultMainCardData?.map((el, I) => {
            return (
              <MainDetailsCard HeartRateAvg={heartRateValue?.data} key={I} el={el} latestData={latestData} />
            )
          })
          }
          {/* <ShowAllDataCard /> */}
          <AlertTriggerCardModel
            updatedAlertTrigger={updatedAlertTrigger}
            openTriggerType={openTriggerType}
            handleClose={handleClose}
            openTriggerModel={openTriggerModel}
            openTriggerResponseFlag={openTriggerResponseFlag}

          />
          {triggerData && triggerData?.map((el, I) => {
            return (
              <AlertTriggerCard openTriggerModel={openTrigger} el={el} key={I} />
            )
          })
          }
        </div>
        <div className="chart-wrapper">
          <HeartRateChartNavTabs action={action} />
        </div>
      </div>
    </>
  )
}
