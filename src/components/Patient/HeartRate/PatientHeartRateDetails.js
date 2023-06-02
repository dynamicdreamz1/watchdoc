import React, { useEffect ,useState} from 'react'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import HeartRateChartNavTabs from './HeartRateChartNavTabs'
import MainDetailsCard from '../../common/DetailCards/MainDetailsCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import { GetUserHeartRateData } from '../../../services/HelthData'
import moment from 'moment'
import { defaultHeartRateAlertTrigger, defaultMainCardData } from '../../../Utility/DefaultObject'


export default function PatientHeartRateDetails({terraId,latestData}) {
  const start = moment().format('YYYY-MM-DD');
  const [heartRateValue,setHeartRateValue]=useState()
  const [FinalDate, setFinalDate] = useState({ start: start, end: start});
  const [timeType,setTimeType]=useState('daily')
  const [isHeartrateSkeleton,setIsHeartrateSkeleton]=useState(false)

const fetchData=async()=>{
  setIsHeartrateSkeleton(true)
  if (timeType && FinalDate) {
    const result= await GetUserHeartRateData(timeType,terraId,FinalDate)
    setHeartRateValue(result);
   setIsHeartrateSkeleton(false)
  }
  
}

useEffect(() => { 
  if(terraId){
 fetchData()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[terraId,FinalDate]);


const action={
  isHeartrateSkeleton,
  setTimeType,
  HeartRateAvg:heartRateValue,
  setHeartRateValue,
  setFinalDate,
}

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
            <HeartRateChartNavTabs action={action}/>
        </div>
    </div>
    </>
  )
}
