import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import AlertTriggerCard from '../../common/DetailCards/AlertTriggerCard'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import BloodPresureChartNavTabs from './BloodPresureChartNavTabs'
import moment from 'moment'
import { GetDate } from '../../../Utility/functions'
import { GetUserBloodPressureData } from '../../../services/HelthData'
import MainDetailsCardForBloodPressure from '../../common/DetailCards/MainDetailsCardForBloodPressure'




export default function Bloodpressure({terraId,latestData}) {
  const {t}=useTranslation()
  const defaultStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const defaultEndDate = moment().format('YYYY-MM-DD');
  const [FinalDate, setFinalDate] = useState({ start: defaultStartDate, end: defaultEndDate });
  const [bloodPressureData, setBloodPressureData] = useState()
  const [timeType, setTimeType] = useState('daily')

  const [value, setValue] =useState(0);
  const [Date, setDate] = useState(GetDate);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ChangeDate = (NewDate) => {
    setDate(GetDate(NewDate));
  }



  const fetchData = async () => {

    const result = await GetUserBloodPressureData(timeType, terraId, FinalDate)
    setBloodPressureData(result);
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
  latestData


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
          <AlertTriggerCard/>
          <AlertTriggerCard/>
          <AlertTriggerCard/>
          <AlertTriggerCard/>
        </div>
        <div className='chart-wrapper'>
          <BloodPresureChartNavTabs terraId={terraId} action={action}/>
        </div>
      </div>
    </div>
  )
}
