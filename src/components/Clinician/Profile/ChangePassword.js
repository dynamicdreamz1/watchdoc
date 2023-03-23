import React from 'react'
import { getCurrentUserData } from '../../../services/UserService';

export default function ChangePassword() {
    const userData = getCurrentUserData();
    const {email}=userData;
  return (
    <>
        <div className='change-password-form'>
            <div className='title-block'>
                <h2>Change your password</h2>
                <span>You are about to change the password for your WatchDoc account, <strong>{email}</strong></span>
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
