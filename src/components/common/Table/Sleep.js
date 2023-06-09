import moment from 'moment';
import React from 'react'
import DateTime from './DateTime';

const Sleep = (props) => {
    const {el}=props;
    const momentObj = moment(el?.metaData?.sleep?.date, 'YY-MM-DD HH-mm-ss');
  const momentString = momentObj.format("DD MMM h:mm A");
    return (
      <>
          <div className='wt table-data'>
              <span className='digit'>{el?.metaData?.sleep?.count} </span>
              <DateTime date={momentString}/>
          </div>
      </>
    )
}

export default Sleep