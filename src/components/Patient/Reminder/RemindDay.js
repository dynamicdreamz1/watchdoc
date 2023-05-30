import React from 'react'

export default function RemindDay({reminderDay}) {
  
  const mon = reminderDay.includes("1");
  const tue = reminderDay.includes("2");
  const wen = reminderDay.includes("3");
  const thu = reminderDay.includes("4");
  const fri = reminderDay.includes("5");
  const sat = reminderDay.includes("6");
  const sun = reminderDay.includes("7");


  return (
    <>
    <div className='days'>
        <button type="button" className={mon=== true ? "day active" : "day"}>M</button>
            <button type="button" className={tue=== true ? "day active" : "day"}>T</button>
            <button type="button" className={wen=== true ? "day active" : "day"}>W</button>
            <button type="button" className={thu=== true ? "day active" : "day"}>T</button>
            <button type="button" className={fri=== true ? "day active" : "day"}>F</button>
            <button type="button" className={sat=== true ? "day active" : "day"}>S</button>
            <button type="button" className={sun=== true ? "day active" : "day"}>S</button>        
    </div>
    </>
  )
}
