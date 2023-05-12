import React, {useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
// import { UserBodyContext } from '../../../Store/Context';
import {Defaultmeasurment } from '../../../Utility/DefaultObject';
// import { watchNumerFormeting } from '../../../Utility/functions';
import MeasurementCard from '../Measurement/MeasurementCard'
import { getLatestMeasurement } from '../../../services/PatientsService';

export default function Latestmeasurement() {
    const [latestData, setlatestData] = useState({})
    // const { heart_data, oxygen_data } = useContext(UserBodyContext);
    const { t } = useTranslation()
    // const [Heartmeasurment, Setmeasurment] = useState(DefaultHeartmeasurment);
    // const [BloodPressuerMeasurment, SetBloodPressuerMeasurment] = useState(DefaultBloodPressuerMeasurment);
    // const [BloodOygenMeasurment, SetBloodOygenMeasurment] = useState(DefaultBloodOygenMeasurment);

    useEffect(() => {
        async function fetchData() {
            await getLatestMeasurement().then(response => response.data).then(response => {
                setlatestData(response);
            })
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // useEffect(() => {
    //     Setmeasurment({ ...Heartmeasurment, ...{ result: watchNumerFormeting(heart_rate_data?.summary?.avg_hr_bpm) } });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [heart_rate_data?.summary?.avg_hr_bpm])

    // console.log("11111-latestData", latestData)


    // useEffect(() => {
    //     SetBloodPressuerMeasurment({ ...BloodPressuerMeasurment, ...{ result: '180/80' } });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     SetBloodOygenMeasurment({ ...BloodOygenMeasurment, ...{ result: oxygen_data?.avg_saturation_percentage } });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [oxygen_data?.avg_saturation_percentage])




    return (



        <div className='measurment-cards-wrapper mt-22'>

            <div className='section-title'>
                <h5>{t('PatientDashboard.Measurement.title1')}</h5>
            </div>
            <div className='wrapper d-flex flex-wrap'>
                {/* <MeasurementCard block={Heartmeasurment} /> */}
                {/* <MeasurementCard block={Heartmeasurment} data={latestData} />
                <MeasurementCard block={BloodOygenMeasurment} data={latestData} /> */}
                {
                    Defaultmeasurment?.map((block, i) => {
                        return <MeasurementCard key={i} block={block} data={latestData}/>
                    })
                }
            </div>
        </div>
    )
}
