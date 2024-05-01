import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Bo(props) {
  const {el}=props;
  const bo = el?.metaData?.blood_oxygen?.count
  const momentObj = moment(el?.metaData?.blood_oxygen?.date, 'DD-MM-YY HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");; 

  return (
    <>
    <div className='bo table-data'>
        <span className='digit'>{bo} %</span>
        <DateTime date={momentString}/>
    </div>
    </>
  )
}
