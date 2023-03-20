import React from 'react'

export default function ChangePassword() {
  return (
    <>
        <div className='change-password-form'>
            <div className='title-block'>
                <h2>Change your password</h2>
                <p>You are about to change the password for your WatchDoc account, <strong>Andrew.Smith@WatchDoc.com.au</strong></p>
            </div>
            <form>
                <div className='input-block'>
                    <input type="password" name='current-password'></input>
                </div>
            </form>
        </div>
    </>
  )
}
