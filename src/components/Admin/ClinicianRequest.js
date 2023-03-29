import React from 'react'

export default function ClinicianRequest() {
  return (
    <>
        <form autoComplete="off">
            <div className='input-block'>
                <div className='inputs-wrapper'>
                    <div className='input-item'>
                        <label>Title</label>
                        <input type="text" name="title" value="Dr" />
                    </div>
                    <div className='input-item'>
                        <label>First name</label>
                        <input type="text" name='firstname' value="Sarah" />
                    </div>
                    <div className='input-item'>
                        <label>Last name</label>
                        <input type="text" name='lastname' value="McDonnell"/>
                    </div>
                </div>
            </div>
            <div className='input-block'>
                <label>Email address</label>
                <input type="email" name='email' value="info@neighbourhoodmedical.com.au" />
            </div>
            <div className='input-block'>
                <label>Practice name</label>
                <input type="text" name='practicename' value="Neighbourhood Medical" />
            </div>
            <div className='input-block'>
                <label>Practice Address</label>
                <input type="text" name='practiceaddress' value="1A Stuartholme Road, Bardon QLD 4065" />
            </div>
            <div className='input-block country-code'>
                <label id="country-code">Mobile number</label>
                <div className='inputs-wrapper'>
                    <input type="text" />
                    <input type="text" name="number" value="451514497" />
                </div>
            </div>
        </form>
    </>
  )
}
