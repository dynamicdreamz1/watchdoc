import React, { useContext, useEffect, useState } from 'react'
import { GetUserBloodOxyenData } from '../../../services/HelthData'
import { UserContext } from '../../../Store/Context'
import { GetDate } from '../../../Utility/functions'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import BloodOxygenChartNavTabs from './BloodOxygenChartNavTabs'

export default function PatientBloodOxygenDetails() {
  const {currentUserData} = useContext(UserContext);
  const [Date] = useState(GetDate);
 const [timeType,setTimeType]=useState(0)
 const [bloodOxygenData,setBloodOxygenData]=useState()
  useEffect(() => {

    async function fetchData() {
  
        await GetUserBloodOxyenData(currentUserData,Date,timeType).then(response => response.data).then(response =>{
  
          setBloodOxygenData(response);
        })
   }
  
   fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeType]);




  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard HeartRateAvg={bloodOxygenData?.summary?.avg_saturation_percentage}/>
            <MainDetailsCard HeartRateAvg={bloodOxygenData?.summary?.avg_saturation_percentage} />
            <ShowAllDataCard HeartRateAvg={bloodOxygenData?.summary}/>
            <AlertTriggerCard HeartRateAvg={bloodOxygenData?.summary}/>
        </div>
        <div className='chart-wrapper'>
            <BloodOxygenChartNavTabs data={bloodOxygenData} setTimeType={setTimeType}/>
        </div>
    </div>
    </>
  )
}
