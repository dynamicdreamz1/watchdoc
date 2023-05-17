import React, { useEffect ,useState} from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { GetDate } from '../../../Utility/functions'
import { GetUserHeartRateData } from '../../../services/HelthData'
import moment from 'moment'
import { defaultHeartRateAlertTrigger, defaultMainCardData } from '../../../Utility/DefaultObject'


export default function PatientHeartRateDetails({terraId,latestData}) {
  // const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const start = moment().format('YYYY-MM-DD');
  const [heartRateValue,setHeartRateValue]=useState()
  const [Date,setDate] = useState(GetDate);
  const [FinalDate, setFinalDate] = useState({ start: start, end: start});

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
          {defaultMainCardData && defaultMainCardData?.map((el,I)=>{
            return (
            <MainDetailsCard HeartRateAvg={heartRateValue?.data} key={I} el={el} latestData={latestData}/>


            )
          })
          }
            <ShowAllDataCard/>
            {defaultHeartRateAlertTrigger && defaultHeartRateAlertTrigger?.map((el,I)=>{
              return(
            <AlertTriggerCard HeartRateAvg={heartRateValue?.data?.summary} el={el} key={I}/>


              )
            })
}
        </div>
        <div className="chart-wrapper">
            <HeartRateChartNavTabs  setTimeType={setTimeType}  HeartRateAvg={heartRateValue} setDate={setDate} Date={Date} setFinalDate={setFinalDate}/>
        </div>
    </div>
    </>
  )
}
