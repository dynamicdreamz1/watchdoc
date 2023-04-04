import { StoreCookie } from "./sessionStore";

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