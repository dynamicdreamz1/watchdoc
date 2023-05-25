import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DateTime(props) {

  return (
    <>
        <span className="time">
         {props.date}
          </span>
    </>
  )
}
