import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import BloodPresureChartNavTabs from './BloodPresureChartNavTabs'
import moment from 'moment'
import { GetDate } from '../../../Utility/functions'
import { GetUserBloodPressureData } from '../../../services/HelthData'
import MainDetailsCardForBloodPressure from '../../common/DetailCards/MainDetailsCardForBloodPressure'
import AlertTriggerCardForBloodPressure from '../../common/DetailCards/AlertTriggerCardForBloodPressure';
import { defaultBloodPressureAlertTrigger } from '../../../Utility/DefaultObject'




export default function Bloodpressure({terraId,latestData}) {
  const {t}=useTranslation()
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const start = moment().format('YYYY-MM-DD');
  const [FinalDate, setFinalDate] = useState({ start: start, end: start });
  const [bloodPressureData, setBloodPressureData] = useState()
  const [timeType, setTimeType] = useState('daily')
  const [isBloodPressureSkeleton,setIsBloodPressureSkeleton]=useState(false)

  const [value, setValue] =useState(0);
  const [Date, setDate] = useState(GetDate);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ChangeDate = (NewDate) => {
    setDate(GetDate(NewDate));
  }



  const fetchData = async () => {
    setIsBloodPressureSkeleton(true)
    const result = await GetUserBloodPressureData(timeType, terraId, FinalDate)
    setBloodPressureData(result);
    setIsBloodPressureSkeleton(false)
  }

  useEffect(() => {
    if (terraId) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terraId, timeType, FinalDate]);



const action={
  FinalDate,
  setFinalDate,
  bloodPressureData,
  setBloodPressureData,
  timeType,
  setTimeType,
  handleChange,
  ChangeDate,
  value,
  latestData,
  isBloodPressureSkeleton


}






  return (
    <div className='mt-22'>
      <div className='section-title'>
        <h5>{t('PatientDashboard.BloodPressure.title')}</h5>
      </div>
      <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
          <MainDetailsCardForBloodPressure action={action}/>
          <ShowAllDataCard/>
          {defaultBloodPressureAlertTrigger && defaultBloodPressureAlertTrigger?.map((el,I)=>{
            return(
              <AlertTriggerCardForBloodPressure el={el} key={I} />

            )
          })
}
         
        </div>
        <div className='chart-wrapper'>
          <BloodPresureChartNavTabs terraId={terraId} action={action}/>
        </div>
      </div>
    </div>
  )
}
