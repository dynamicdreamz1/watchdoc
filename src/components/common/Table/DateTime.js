import React from 'react'
// import { useLocation } from 'react-router-dom'

export default function DateTime(props) {
  // const {value}=props
  // const location=useLocation()
  return (
    <>
        <span className="time">
         {props.date}
          </span>
    </>
  )
}
