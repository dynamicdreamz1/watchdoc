import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Bp(props) {

  const {value ,el}=props;
  const bp = el?.metaData?.blood_pressure?.count
  const momentObj = moment(el?.metaData?.blood_pressure?.date, 'YY-MM-DD HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");


  return (
    <>
        <div className='bp table-data'>
            <span className='digit color-red'>{bp}</span>
            <DateTime date={momentString} />
        </div>
    </>
  )
}
