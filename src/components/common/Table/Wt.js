import React from 'react'
import { MetaFormeting } from '../../../Utility/functions'
import DateTime from './DateTime'

export default function Wt(props) {
  const {weight}=MetaFormeting(props?.el)
  const {el:{wt}}=props
  const {value}=props

  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{value===0 || value===1 ? wt : weight}</span>
            <DateTime props={props?.el}/>
        </div>
    </>
  )
}
