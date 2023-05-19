import React from 'react'
import ShowAllDataCard from '../../common/DetailCards/ShowAllDataCard'
import MainDetailsCardForWeight from '../../common/DetailCards/MainDetailsCardForWeight'
import AlertTriggerCardWeight from '../../common/DetailCards/AlertTriggerCardWeight';
import { defaultWeightAlertTrigger } from '../../../Utility/DefaultObject'
import {  DefaultChartSkeleton } from '../../../Utility/Skeleton';

export default function PatientWeightDetail({latestData}) {
  return (
    <>
    <div className='phrd d-flex flex-wrap'>
        <div className='cards-wrapper d-flex flex-wrap'>
            <MainDetailsCardForWeight latestData={latestData}/>
            <ShowAllDataCard/>
            {defaultWeightAlertTrigger && defaultWeightAlertTrigger?.map((el,I)=>{
              return(
            <AlertTriggerCardWeight el={el} key={I}/>

              )
            })
}
        </div>
        <div className='chart-wrapper'>
            {/* <WeightChartNavTabs/> */}
            <DefaultChartSkeleton />
        </div>
    </div>
    </>
  )
}
