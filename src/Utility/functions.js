import { getCurrentUserData } from "../services/UserService";
import { StoreCookie } from "./sessionStore";
import moment from "moment";

export const MetaFormeting = (metadata) => {
  let userProfile = [];
  metadata?.meta_data?.map(item => userProfile[item?.meta_key] = item?.meta_value)
  return userProfile;
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
  headersAdmin.Authorization = `Bearer ${token}`
}

export const GetdayHourMin = (data) => {
  if (data === "") {
    return { lable: "minutes", data: 0 }

  }
  const interestEndDate = moment().format('YYYY-MM-DD HH:mm:ss')
  const momentObj = moment(data, 'DD-MM-YYYY HH:mm:ss');
  const momentString = momentObj.format('YYYY-MM-DD HH:mm:ss');

  let minutes = moment(interestEndDate).diff(moment(momentString), 'minutes', true).toFixed(0)
  if (minutes >= 60) {
    minutes = undefined
  }
  let day = moment(interestEndDate).diff(moment(momentString), 'days', true).toFixed(0)
  if (28 <= parseInt(day)) {
    day = undefined
  } else if (30 <= parseInt(day)) {
    day = undefined
  } else if (31 <= parseInt(day)) {
    day = undefined

  }
  let hours = moment(interestEndDate).diff(moment(momentString), 'hours', true).toFixed(0)
  if (parseInt(hours) >= 24) {
    hours = undefined
  }
  let months = moment(interestEndDate).diff(moment(momentString), 'months', true).toFixed(0)
  if (12 <= parseInt(months)) {
    months = undefined
  }
  const years = moment(interestEndDate).diff(moment(momentString), 'year', true).toFixed(0)

  if (minutes) {
    return { lable: "minutes", data: parseInt(minutes) }
  }
  else if (hours) {
    return { lable: "hours", data: parseInt(hours) }
  }
  else if (day) {
    return { lable: "days", data: parseInt(day) }
  }
  else if (months) {
    return { lable: "months", data: parseInt(months) }
  }
  else {
    return { lable: "years", data: parseInt(years) }
  }

}


export const convertDecimalToPercentage = (decimal, decimalPlaces = 0) => {
  const percentage = decimal * 100;
  return percentage.toFixed(decimalPlaces);
};

export const calculateAge = (birthday) => {
  const startDate = new Date();
  const endDate = new Date(birthday);
  return Math.abs(moment.duration(endDate - startDate).years());
}

export const requestAndApprovePatient = (data) => {
  const arr = [];
  if (data) {
    data?.map(item => {
      let metaData = {};
      item?.meta_data?.map(item => metaData[item?.meta_key] = item?.meta_value)
      const age = calculateAge(moment(metaData?.dob, "YYYY-MM-DD").format("YYYY-MM-DD"))
      const data = metaData.latest ? JSON.parse(metaData.latest) : null
      const object = {
        id: item.id,
        name: `${metaData?.first_name} ${metaData?.last_name}`,
        first_name: metaData?.first_name,
        last_name: metaData?.last_name,
        age: `${age} Years`,
        gender: metaData?.sex,
        status: item.request_status === 1 ? "Reviewed" : "Pending",
        metaData: data,
      }

      arr.push(object)
    })
    return arr;
  }
}


export const reviewedUnReviwedCommon = (data) => {
  const arr = [];
  if (data) {
    data?.map(item => {
      let metaData = {};
      item?.meta_data?.map(item => metaData[item?.meta_key] = item?.meta_value)
      const age = calculateAge(moment(metaData?.dob, "YYYY-MM-DD").format("YYYY-MM-DD"))
      const data = item?.critical_alerts_data ? JSON.parse(item?.critical_alerts_data) : null
      const object = {
        id: item.user_id,
        name: `${metaData?.first_name} ${metaData?.last_name}`,
        first_name: metaData?.first_name,
        last_name: metaData?.last_name,
        age: `${age} Years`,
        gender: metaData?.sex,
        status: item?.status === 1 ? "Reviewed" : "UnReviewed",
        metaData: data,
        alertId : item.id
      }

      arr.push(object)
    })
    return arr;
  }
}

export const getEmergencyContact = () => {
  const array = []
  let object = {}
  const userData = getCurrentUserData()
  userData?.meta_data?.map((item) => {
    if (item?.meta_key === 'emergency_contact') {
      object = { id: item.id, meta_key: item.meta_key, metaData: JSON.parse(item.meta_value) }
      array.push(object)
    }
  })
  return array
}


export const convertMinutesToHoursAndMinutes = (seconds) => {
  if (seconds) {
    const sleepHours = Math.floor(seconds / 3600);

    // Convert remaining seconds to seconds
    const sleepMinutes = Math.floor((seconds % 3600) / 60);
    if (sleepHours || sleepMinutes) {
      return sleepHours + "hr:" + sleepMinutes + "min";
    }
    return 0 + "hr:" + 0 + "min";
  } else {
    return  0 + "hr:" + 0 + "min";
  }
}


export const addMissingObjects =(arr1, arr2) => {
  arr1?.forEach(obj1 => {
      let index = arr2?.findIndex(obj2 => obj2.criteria_title === obj1.criteria_title);
      if (index === -1) {
          arr2.push(obj1);
      }
  });
  return arr2;
}