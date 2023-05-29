import React from 'react'
import { useTranslation } from 'react-i18next';
import {Defaultmeasurment } from '../../../Utility/DefaultObject';
import MeasurementCard from '../Measurement/MeasurementCard'
import { DashboardResultRange } from '../../../Utility/Skeleton';

export default function Latestmeasurement({latestData}) {
    const { t } = useTranslation()
    return (

        <div className='measurment-cards-wrapper mt-22'>

            <div className='section-title'>
                <h5>{t('PatientDashboard.Measurement.title1')}</h5>
            </div>
            <div className='wrapper d-flex flex-wrap'>
             
                {
                    Defaultmeasurment?.map((block, i) => {
                        return latestData.latest ?   <MeasurementCard key={i} block={block} data={latestData}/> :  <DashboardResultRange key={i}/>
                    })
                }
            </div>
        </div>
    )
}
