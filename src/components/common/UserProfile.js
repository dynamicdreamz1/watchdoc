import { Avatar } from '@mui/material'
import React from 'react'

export default function UserProfile({ data }) {
  console.log(data);
  return (
    <>
      <span className='fname'>
        <div className='user-profile'>
          {data?.length > 0 && data?.map((el) => (
            <>
              {el?.meta_key === "image" ?
                <div className='user-avtar'>
                  <Avatar className='user-profile-avtar' alt="Avtar" src={el?.meta_value} />
                </div>
                : ""}
              <div className='user-info'>
                {el?.meta_key === "full_name" ? el?.meta_value : ""}
              </div>
            </>
          ))}
        </div>
      </span>

    </>

  )
}
