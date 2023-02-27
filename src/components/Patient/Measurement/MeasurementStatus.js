import React from 'react'

export default function MeasurementStatus(props) {
  console.log(props.status)

  return (
    <>
    <div className= {`${props.status} m-status alert`}>
    </div>
    </>
  )
}
