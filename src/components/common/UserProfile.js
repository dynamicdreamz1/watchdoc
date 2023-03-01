import { Avatar } from '@mui/material'
import React from 'react'

export default function UserProfile({data}) {
  console.log(data)
  return (
    <>
    <div className='user-profile'>
        <div className='user-avtar'>
            <Avatar alt="Avtar" src='' />
        </div>
        <div className='user-info'>
            <span className='fname'>{data?.length>0 && data.map((element)=>(
             
              <>{element.user_data.map((userName)=>(
                
                <>
                {userName.meta_key==="full_name" &&   <> {userName.meta_value} <br/> </>}
                </>
              ))}</>
            ))}</span>
              
            
        </div>
    </div>
    </>
  )
}
