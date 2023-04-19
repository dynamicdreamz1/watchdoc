import React, { useContext, useEffect ,useState} from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { UserContext } from '../../../Store/Context'
// import { GetDate } from '../../../Utility/functions'
import { GetUserHeartRateData } from '../../../services/HelthData'

export default function PatientHeartRateDetails() {
  // const {heart_data} = useContext(UserBodyContext);
  // const {heart_rate_data} = heart_data;
  const [heartRateValue,setHeartRateValue]=useState()

  const {currentUserData} = useContext(UserContext);
  const [Date,setDate] = useState("2023-03-21");
 const [timeType,setTimeType]=useState(0)

useEffect(() => {

  async function fetchData() {

      await GetUserHeartRateData(currentUserData,Date,timeType).then(response => response.data).then(response =>{

        setHeartRateValue(response);
      })
 }

 fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[timeType,Date]);
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard HeartRateAvg={heartRateValue?.summary?.avg_hr_bpm}/>
            <ShowAllDataCard/>
            <AlertTriggerCard HeartRateAvg={heartRateValue?.summary}/>
            <AlertTriggerCard HeartRateAvg={heartRateValue?.summary}/>
        </div>
        <div className="chart-wrapper">
            <HeartRateChartNavTabs  setTimeType={setTimeType}  HeartRateAvg={heartRateValue} setDate={setDate} Date={Date}/>
        </div>
    </div>
    </>
  )
}
