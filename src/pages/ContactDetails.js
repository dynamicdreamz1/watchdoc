import React from 'react'

export default function ContactDetails() {
  return (
    <>
    <div className='varification-page-wrapper'>
        <div className='container'>
            <div className='page-header'>
                <img src='/images/WatchDoc-LOGO.png' alt='Watch Doc Logo' />
            </div>
            <div className='page-content-wrapper'>
                <div className="title-block">
                    <h4>Your contact details</h4>
                    <p>Please enter your mobile number below.</p>
                </div>
                {/* <div className='eError'> {error}</div>
                <div className='sMessage'> {message}</div> */}
                <form>
                    <div className='input-block'>
                        <label htmlFor="exampleInputCode" >Mobile Number</label>
                        <input type="number" placeholder="Your mobile number" value="" id="exampleInputCode" />
                    </div>
                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
