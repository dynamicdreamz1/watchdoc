import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Temp(props) {

  const {el}=props;
  const temp = el?.metaData?.temperature?.count
  const momentObj = moment(el?.metaData?.temperature?.date, 'DD-MM-YY HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");
  return (
    <>
        <div className='bg table-data'>
            <span className='digit'>{temp}</span>
            <DateTime date={momentString}/>
        </div>
    </>
  )
}
