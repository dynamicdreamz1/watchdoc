import React, { useEffect ,useState} from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { GetDate } from '../../../Utility/functions'
import { GetUserHeartRateData } from '../../../services/HelthData'
import moment from 'moment'


export default function PatientHeartRateDetails({terraId}) {
  // const {heart_data} = useContext(UserBodyContext);
  // const {heart_rate_data} = heart_data;
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const defaultEndDate = moment().format('YYYY-MM-DD');
  const [heartRateValue,setHeartRateValue]=useState()
  const [Date,setDate] = useState(GetDate);
  const [FinalDate, setFinalDate] = useState({ start: defaultStartDate, end: defaultEndDate});

  const [timeType,setTimeType]=useState('daily')

const fetchData=async()=>{

 const result= await GetUserHeartRateData(timeType,terraId,FinalDate)
  setHeartRateValue(result);
}

useEffect(() => { 
  if(terraId){
 fetchData()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[terraId,timeType,FinalDate]);


  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCard HeartRateAvg={heartRateValue?.data?.summary?.avg_hr_bpm}/>
            <ShowAllDataCard/>
            <AlertTriggerCard HeartRateAvg={heartRateValue?.data?.summary}/>
            <AlertTriggerCard HeartRateAvg={heartRateValue?.data?.summary}/>
        </div>
        <div className="chart-wrapper">
            <HeartRateChartNavTabs  setTimeType={setTimeType}  HeartRateAvg={heartRateValue} setDate={setDate} Date={Date} setFinalDate={setFinalDate}/>
        </div>
    </div>
    </>
  )
}
