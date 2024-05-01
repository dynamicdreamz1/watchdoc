import React, { useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import moment from 'moment'
import MainDetailsCardForBloodOxygen from '../../common/DetailCards/MainDetailsCardForBloodOxygen';
import AlertTriggerCardBloodOxygen from '../../common/DetailCards/AlertTriggerCardBloodOxygen'
import BloodOxygenChartNavTabs from './BloodOxygenChartNavTabs';
import { toast } from 'react-toastify';

export default function PatientBloodOxygenDetails({ terraId, latestData }) {
  const start = moment().format('YYYY-MM-DD');
  const [timeType, setTimeType] = useState('daily')
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [isBloodOxygenSkeleton,setIsBloodOxygenSkeleton]=useState(false);
  const [bloodOxygenData, setBloodOxygenData] = useState()

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
  

  useEffect(() => {
    if (terraId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, FinalDate]);

  const titleAction={
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
          {/* <MainDetailsCardForBloodOxygen titleAction={titleAction} /> */}
          <ShowAllDataCard HeartRateAvg={bloodOxygenData?.data?.summary} />
          {bloodOxygenData?.data.blood_oxygen_criteria && bloodOxygenData?.data.blood_oxygen_criteria?.map((el, I) => {
            return (
              <AlertTriggerCardBloodOxygen el={el} key={I} />
            )
          })
          }
        </div>
        <div className='chart-wrapper'>
          <BloodOxygenChartNavTabs  titleAction={titleAction} />
        </div>
      </div>
    </>
  )
}
