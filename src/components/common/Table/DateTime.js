import React from 'react'

export default function DateTime(props) {
  const {value}=props
  return (
    <>
        <span className="time">
          { value===0 || value===1 ? props?.props?.date.toDateString() : ""}
          </span>
    </>
  )
}
