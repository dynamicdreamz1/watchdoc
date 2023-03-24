import React from 'react'

export default function AddStaffUser() {
  return (
    <>
        <div className='my-profile-form'>
            <div className='title-block'>
                <h2>Add Staff User</h2>
            </div>
            <form>
                <div className='input-block update-profile'>
                    <div className='image-block'>
                        <img src="/images/user-picture-placeholder.png" alt="Staf User" />
                    </div>
                    <div>
                        <input id="file" type="file"/>
                    </div>
                </div>
                <div className='input-block'>
                    <div className='inputs-wrapper'>
                        <div className='input-item'>
                            <label>Title</label>
                            <select name='title'>
                                <option value="Dr">Dr</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                        </div>
                        <div className='input-item'>
                            <label>First name</label>
                            <input type="text" name='firstname' placeholder='First Name*'/>
                            <span className="error"></span>
                        </div>
                        <div className='input-item'>
                            <label>Last name</label>
                            <input type="text" name='lastname' placeholder='Last Name*'/>
                            <span className="error"></span>
                        </div>
                    </div>
                </div>
                <div className='input-block'>
                    <label>Email address</label>
                    <input type="email" name='email' placeholder='Email*'/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice name</label>
                    <input type="text" name='practicename' placeholder='Practice name*'/>
                    <span className="error"></span>
                </div>
                <div className='input-block'>
                    <label>Practice Address</label>
                    <input type="text" name='practiceaddress' placeholder='Practice Address*'/>
                    <span className="error"></span>
                </div>
                <div className='submit-block'>
                    <button type="submit">Add Staff User</button>
                </div>
            </form>
        </div>
    </>
  )
}
