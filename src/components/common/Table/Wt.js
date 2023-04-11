import React from 'react'
import { MetaFormeting } from '../../../Utility/functions'
import DateTime from './DateTime'

export default function Wt(props) {
  const {weight}=MetaFormeting(props?.el)
  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{weight}</span>
            <DateTime props={props?.el}/>
        </div>
    </>
  )
}
