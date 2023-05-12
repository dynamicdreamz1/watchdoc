import React from 'react'

export default function WeightYourselfReminderOverlay() {
  return (
    <>
      <div className='high-heart-rate'>
        <div className='dialog-title'>
          <h2>Weigh Yourself</h2>
          <p>We recommend you weigh yourself between two and seven times a week in the morning before breakfast.</p>
        </div>
        <form>
          <div className='clock-title'>
            <img src='/images/clock-icon.svg' alt="Click Icon" />
            <span>Time</span>
          </div>
          <input type='text' name="time" defaultValue="10:00 am" />
          <div className='clock-title'>
            <img src='/images/clock-icon.svg' alt="Click Icon" />
            <span>Days</span>
          </div>
          <div className='radios-wrapper'>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Monday"/>
              <label>Every Monday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Tuesday"/>
              <label>Every Tuesday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Wednesday"/>
              <label>Every Wednesday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Thursday"/>
              <label>Every Thursday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Friday"/>
              <label>Every Friday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Saturday"/>
              <label>Every Saturday</label>
            </div>
            <div className='radio-item'>
              <input type="radio" name="day" defaultValue="Every Sunday"/>
              <label>Every Sunday</label>
            </div>
          </div>
          <div className='submit-block'>
              <button type='button' className="btn">Add Reminder</button>
          </div>
        </form>
      </div>
    </>
  )
}
