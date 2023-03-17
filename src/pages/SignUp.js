import React from 'react'

const SignUp = () =>  {
  return (
    <>
        <div className='page-wrapper signup-page-wrapper'>
            <div className='form-block'>
                <div className='content'>
                <div className='logo-block'>
                    <img src='/images/WatchDoc-LOGO.svg' alt='WatchDoc Logo' />
                </div>
                <div className='text-block'>
                    <h1>Create your free clinician listing</h1>
                    <p>Create a free profile on WatchDoc and make it easy for your<br></br> patients to find and connect with you via the WatchDoc app.</p>
                </div>
                <form>
                    <div className='input-block'>
                        <input type="text" name='first-name' placeholder='First Name*' required />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='last-name' placeholder='Last Name*' required />
                    </div>
                    <div className='input-block'>
                        <input type="email" name='email' placeholder='Email*' required />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='mobile' placeholder='Mobile*' required />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='practice-name' placeholder='Practice name*' required />
                    </div>
                    <div className='input-block'>
                        <input type="text" name='practice-address' placeholder='Practice Address*' required />
                    </div>
                    <div className='submit-block'>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp;
