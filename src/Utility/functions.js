import { StoreCookie } from "./sessionStore";
import moment from "moment";

export const ageCalc = (date) => {

  var dob = new Date(date);
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);

  //extract year from date      
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user  
  // eslint-disable-next-line no-undef
  return Math.abs(year - 1970);
}


// calculate diffrence between time in minutes

export const calculateTimeDifferenceInMinutes = (dateString) => {
  if(dateString===""){
    return 0;
  }
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  
  const differenceInMilliseconds = currentDate - givenDate;
  const differenceInMinutes = Math.round(differenceInMilliseconds / 60000);
  
  return differenceInMinutes;
}





export const MetaFormeting = (metadata) => {
  let userpforle = [];
  metadata?.meta_data?.map(item => userpforle[item?.meta_key] = item?.meta_value)
  return userpforle;
}

export const watchNumerFormeting = (num) => {

  return (num) ? Number(num).toFixed(2) : '';
}

export const a11yProps = (index) => {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const GetDate = (date) => {
  var MyDate = (date) ? new Date(date) : new Date();
  return MyDate.getFullYear() + '-' + (('0' + (MyDate.getMonth() + 1)).slice(-2)) + '-' + (('0' + MyDate.getDate()).slice(-2))

}

export const headers = {
  "Content-Type": "multipart/form-data",
  "Accept": "application/json",
}

let token = StoreCookie.getItem('token')
export const headersClinician = {
  "Accept": "application/json",
  Authorization: `Bearer ${token}`
}

export const headersAdmin = {
  "Accept": "application/json",
  Authorization: `Bearer ${token}`
}

export const headersUser = {
  "Content-Type": "multipart/form-data",
  "Accept": "application/json",
  Authorization: `Bearer ${token}`
}

export const updateToken = () => {
  const token = StoreCookie.getItem('token');
  headersClinician.Authorization = `Bearer ${token}`;
  headersUser.Authorization = `Bearer ${token}`;
  headersAdmin.Authorization= `Bearer ${token}`
}

export const  GetdayHourMin = (data) =>{
  if(data===""){
    return {lable : "minutes", data : 0}

  }
  const interestEndDate = moment().format('YYYY-MM-DD HH:mm:ss')
  const momentObj = moment(data, 'DD-MM-YYYY HH:mm:ss');
  const momentString = momentObj.format('YYYY-MM-DD HH:mm:ss'); 
  const day = moment(interestEndDate).diff(moment(momentString), 'days', true).toFixed(0)
  const minutes = moment(interestEndDate).diff(moment(momentString), 'minutes', true).toFixed(0)
  const hours = moment(interestEndDate).diff(moment(momentString), 'hours', true).toFixed(0)
  const months = moment(interestEndDate).diff(moment(momentString), 'months', true).toFixed(0)
  if (minutes <= 60) {
    return {lable : "minutes", data : minutes}
  }
  else if (hours <= 24) {
    return {lable : "hours", data : hours} 
  }
  else if (day <= 30 || 28 || 31) {
    return {lable : "days", data : day}
  }
  else if (months <= 12) {
    return {lable : "months", data : months}
  }
}


export const convertDecimalToPercentage = (decimal, decimalPlaces = 0) => {
  const percentage = decimal * 100;
  return percentage.toFixed(decimalPlaces);
};


export const requestAndApprovePatient = (data) => {
  const arr = [];
  if (data) {
      data?.map(item=>{
        let metaData = {};
        item?.meta_data?.map(item => metaData[item?.meta_key] = item?.meta_value)
        const  age = moment(metaData?.dob, "YYYY/MM/DD").month(0).from(moment().month(0))
        const data = JSON.parse(metaData.latest)
        const object = {
            id: item.id,
            name: `${metaData?.first_name} ${metaData?.last_name}`, 
            first_name: metaData?.first_name,
            last_name: metaData?.last_name,
            age: age,
            gender: metaData?.sex,
            status: item.request_status===1?"Reviewed" : "Pending",
            metaData:data,
        }
        arr.push(object)
      })
      return arr;
    }
}