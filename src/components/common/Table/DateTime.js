import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DateTime(props) {
  const {value}=props
  const location=useLocation()
  return (
    <>
        <span className="time">
          { value===0 || value===1 || location.pathname==="/cliniciandetails"  ? props?.props?.date.toDateString() : ""}
          </span>
    </>
  )
}
