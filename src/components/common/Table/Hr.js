import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Hr(props) {
  const {value,el}=props;
  const hr = el?.metaData?.heart_rate?.count
  var date = moment(el?.metaData?.heart_rate?.date).format("DD MMM h:mm A");
  return (
    <>
    <div className='hr table-data'>
        <span className='digit'>{hr} bpm</span>
        <DateTime date={date}/>
    </div>
    </>
  )
}
