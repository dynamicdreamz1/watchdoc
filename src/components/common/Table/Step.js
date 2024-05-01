import moment from 'moment';
import React from 'react'
import DateTime from './DateTime';

const Step = (props) => {
   const {el}=props;
   const momentObj = moment(el?.metaData?.step?.date, 'DD-MM-YY HH-mm-ss');
   const momentString = momentObj.format("DD MMM h:mm A");
   
  return (
    <>
        <div className='wt table-data'>
            <span className='digit'>{el?.metaData?.step?.count} Step</span>
            <DateTime date={momentString}/>
        </div>
    </>
  )
}

export default Step;