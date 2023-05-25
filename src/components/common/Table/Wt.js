import React from 'react'
import DateTime from './DateTime'
import moment from 'moment';

export default function Wt(props) {
  const {value,el}=props;
  const weight = el?.metaData?.weight?.count
  const momentObj = moment(el?.metaData?.weight?.date, 'YY-MM-DD HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");
  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{weight} Kg</span>
            <DateTime date={momentString}/>
        </div>
    </>
  )
}
