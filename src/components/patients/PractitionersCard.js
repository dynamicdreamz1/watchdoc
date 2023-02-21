import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PractitionersCard() {
  return (
    <>
    <div className='practitioners-card'>
        <h5>Practitioners</h5>
        <div className='card d-flex'>
            <div className='user-image'>
                <img src='/images/user-image-big.png' alt='User Image' />
            </div>
            <div className='text-block'>
                <h5>Dr Sarah McDonnell</h5>
                <p>Neighbourhood Medical<br></br>
                   1a Stuartholme Rd<br></br>
                   Bardon, QLD 4065
                </p>
                <div className='add-fav'>
                <FormControlLabel
                    control={
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    }
                    label="Add to WatchDoc"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
