import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Temp(props) {

  const {value,el}=props;
  const temp = el?.metaData?.temperature?.count
  var date = moment(el?.metaData?.temperature?.date).format("DD MMM h:mm A");
  return (
    <>
        <div className='bg table-data'>
            <span className='digit'>{temp}</span>
            <DateTime date={date}/>
        </div>
    </>
  )
}
