import React from 'react'
import { MetaFormeting } from '../../../Utility/functions'
import DateTime from './DateTime'

export default function Wt(props) {
  const {value,el}=props;
  const weight = el?.metaData?.weight?.count
  var date = moment(el?.metaData?.weight?.date).format("DD MMM h:mm A");
  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{weight} Kg</span>
            <DateTime date={date}/>
        </div>
    </>
  )
}
