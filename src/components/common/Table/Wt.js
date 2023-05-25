import React from 'react'
import { MetaFormeting } from '../../../Utility/functions'
import DateTime from './DateTime'

export default function Wt(props) {
  const {value,el}=props;
  console.log("ele",el);
  const weight = el?.metaData?.weight?.count

  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{weight}</span>
            <DateTime props={props?.el} value={value}/>
        </div>
    </>
  )
}
