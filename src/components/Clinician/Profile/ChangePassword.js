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
                    <label>Current password</label>
                    <input type="password" name='current-password' placeholder='Enter current password'></input>
                </div>
                <div className='input-block'>
                    <label>New password</label>
                    <input type="password" name='new-password' placeholder='Enter a new password'></input>
                </div>
                <div className='input-block'>
                    <label>Confirm new password</label>
                    <input type="password" name='confirm-password' placeholder='Confirm your new password'></input>
                </div>
                <div className='submit-block'>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </>
  )
}
