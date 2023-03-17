import React from 'react'

export default function PatientEntry() {
  return (
    <>
    <div className='page-wrapper'>
        <div className='signin-box'>
            <div className='logo-block'>
                <div className='logo'>
                    <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                </div>
            </div>
            <div className='form-block'>
                <form>
                    <div className='input-block'>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className='submit-block'>
                        <button type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
