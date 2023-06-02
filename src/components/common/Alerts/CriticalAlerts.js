import React, { useState } from 'react'
import AlertCard from './AlertCard'

export default function CriticalAlerts({latestData,fetchData}) {
  const [viewAllBtn,setViewAllBtn]=useState(false)
  
  const viewLessData=latestData?.criteria_alert && latestData?.criteria_alert?.slice(0,4);
  const viewAllData=latestData?.criteria_alert && latestData?.criteria_alert?.slice(0,latestData?.criteria_alert?.length)
  const finalData=viewAllBtn?viewAllData:viewLessData
  return (
    <>
        <div className='critical-alerts-wrapper mt-22'>
            <div className="section-title d-flex align-items-center justify-content-between">
                <h5>Critical Alerts</h5>
                {latestData?.criteria_alert?.length ===0?"":<button type='button' onClick={()=>setViewAllBtn(!viewAllBtn)}>
                  {!viewAllBtn?
                `View All Alerts (${viewAllData?.length?viewAllData?.length:0})`
                :`View Less Alerts (${finalData?.length?finalData?.length:0})`}
                </button>}
            </div>
            <div className='wrapper'>
              {
               finalData?.map((item, I) => {
                return <> <AlertCard alertData={item} key={I} fetchData={fetchData}/> <br/></>
              })
              }
            </div>
        </div>
    </>
  )
}
