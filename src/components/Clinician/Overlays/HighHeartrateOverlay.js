import React from 'react'

export default function HighHeartrateOverlay() {
  return (
    <>
        <div className='high-heart-rate'>
            <div className='dialog-title'>
                <h2>High Heart Rate</h2>
                <p>Set when a critical alert will be triggered.</p>
            </div>
            <form>
                <div className='radios-wrapper'>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="Off"/>
                        <label>Off</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="100 bpm"/>
                        <label>100 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="110 bpm"/>
                        <label>110 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="120 bpm"/>
                        <label>120 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="130 bpm"/>
                        <label>130 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="140 bpm"/>
                        <label>140 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="150 bpm"/>
                        <label>150 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="160 bpm"/>
                        <label>160 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="170 bpm"/>
                        <label>170 bpm</label>
                    </div>
                    <div className='radio-item'>
                        <input type="radio" name="heartrate" value="180 bpm"/>
                        <label>180 bpm</label>
                    </div>
                </div>
                <div className='submit-block'>
                    <button type='button' className="btn">Confirm</button>
                </div>
            </form>
        </div>
    </>
  )
}
