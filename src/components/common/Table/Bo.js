import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Bo(props) {
  const {value,el}=props;
  const bo = el?.metaData?.heart_rate?.count
  var date = moment(el?.metaData?.heart_rate?.date).format("DD MMM h:mm A");

  return (
    <>
    <div className='bo table-data'>
        <span className='digit'>{bo} %</span>
        <DateTime date={date}/>
    </div>
    </>
  )
}
