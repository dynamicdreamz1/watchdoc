import React from 'react'

export default function TwoFactor() {
  return (
    <>
        <div className='page-wrapper'>
            <div className='signin-box'>
                <div className='logo-block'>
                    <div className='logo'>
                        <img src='/images/WatchDoc-LOGO.svg' alt="WatchDoc Logo" />
                    </div>
                </div>
                <div className='title-block'>
                    <h4 className='text-center'>Verify your Enhanced Security (2FA)</h4>
                    <p>We sent a text message to +61 ••• ••• •97. Enter your verification code to continue signing in.</p>
                </div>
                <div className='form-block'>
                    <form>
                        <div className='input-block'>
                            <input type="text" name='code' placeholder='SMS Code'/>
                        </div>
                        <div className='submit-block'>
                            <button type='submit'>Confirm</button>
                        </div>
                        <div className='cancle-signout'>
                            <button type='button'>Cancel and sign out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
