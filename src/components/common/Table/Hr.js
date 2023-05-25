import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Hr(props) {
  const {el}=props;
  const hr = el?.metaData?.heart_rate?.count
  const momentObj = moment(el?.metaData?.heart_rate?.date, 'YY-MM-DD HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");
  return (
    <>
    <div className='hr table-data'>
        <span className='digit'>{hr} bpm</span>
        <DateTime date={momentString}/>
    </div>
    </>
  )
}
