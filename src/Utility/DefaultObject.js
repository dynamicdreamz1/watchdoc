export const BodyObject = {
    blood_pressure_data: {},
    temperature_data: {},
    measurements_data: {},
    heart_data: {},
    ketone_data: {},
    hydration_data: {},
    glucose_data: {},
    metadata: {},
    oxygen_data: {},

}

export const Defaultmeasurment = [

    {
        "key": "heart_rate",
        "status": "high",
        "icon": "heart-rate-icon.svg",
        "type": "Heart Rate",
        "result": '',
        "label": "bpm",
        "time": ""
    },
    {
        "key": "blood_pressure",
        "status": "high",
        "icon": "heart-rate-icon.svg",
        "type": "Blood Pressure",
        "result": "",
        "label": "",
        "time": "1 min ago"
    },
    {
        "key": "blood_oxygen",
        "status": "normal",
        "icon": "blood-oxygen-icon.svg",
        "type": "Blood Oxygen",
        "result": "",
        "label": "%",
        "time": "1 min ago"
    },

    // {
    // "key":"",

    //     "status": "normal",
    //     "icon": "blood-glucose-icon.svg",
    //     "type": "Blood Glucose",
    //     "result": "-",
    //     "label": "",
    //     "time": "No Data"
    // },
    {
        "key": "weight",
        "status": "normal",
        "icon": "weight-icon.svg",
        "type": "Weight",
        "result": "",
        "label": "kg",
        "time": "12 days ago"
    },
    {
        "key": "step",
        "status": "none",
        "icon": "temperature-icon.svg",
        "type": "Step",
        "result": "-",
        "label": "step",
        "time": "No data"
    },
    {
        "key": "sleep",
        "status": "none",
        "icon": "temperature-icon.svg",
        "type": "Sleep",
        "result": "-",
        "label": "",
        "time": "No data"
    }
    // {
    // "key":"",

    //     "status": "none",
    //     "icon": "temperature-icon.svg",
    //     "type": "Temperature",
    //     "result": "-",
    //     "label": "",
    //     "time": "No data"
    // }
]




export const defaultMainCardData = [

    {
        "id": "latest_heart_rate",
        "name": "Heart Rate",
        "status": "high",
        "icon": "heart-rate-icon.svg",
        "type": "Heart Rate",
        "result": '',
        "label": "bpm",
        "time": ""
    },
    {
        "id": "resting_heart_rate",
        "name": "Resting Heart Rate",
        "status": "",
        "icon": "heart-rate-icon.svg",
        "type": "Heart Rate",
        "result": '',
        "label": "bpm",
        "time": ""
    },
    {
        "id": "sleep_heart_rate",
        "name": "Sleep",
        "status": "",
        "icon": "heart-rate-icon.svg",
        "type": "Heart Rate",
        "result": '',
        "label": "bpm",
        "time": ""
    },
]


export const defaultWeightAlertTrigger = [
    {
        "id": 1,
        "title": "Low Weight Alert Trigger",
        "result": "75",
        "lable": "",
        "type": "",
    },
    {
        "id": 2,
        "title": "High Weight Alert Trigger",
        "result": "95",
        "lable": "",
        "type": ""
    }
]


export const day = [
    {
        id: 1,
        day: "Monday"
    },
    {
        id: 2,
        day: "Tuesday"
    },
    {
        id: 3,
        day: "Wednesday"
    },
    {
        id: 4,
        day: "Thursday"
    },
    {
        id: 5,
        day: "Friday"
    },
    {
        id: 6,
        day: "Saturday"
    },
    {
        id: 7,
        day: "Sunday"
    }
]


export const REMINDER_TYPE_ARRAY = [
    {
        id: 3,
        name: "MEDICATION",
        buttonText: "Add Reminder",
        reminder_type: "medication"
    },
    {
        id: 1,
        name: "WEIGHT",
        buttonText: "Add Reminder",
        reminder_type: "weight"
    },
    {
        id: 2,
        name: "BLOOD PRESSURE",
        buttonText: "Add Reminder",
        reminder_type: "blood_pressure"
    },

    {
        id: 4,
        name: "CUSTOM",
        buttonText: "Add Reminder",
        reminder_type: "custome"
    },
];


export const ConnectDeviceData = [

    {
        id: 1,
        lable: "Fitbit",
        type: "FITBIT",
        img: "/images/Fitbit-icon.svg",
    },
    {
        id: 2,
        lable: "Apple Health",
        type: "APPLE",
        img: "/images/Apple-Health-icon.svg",
    },
    {
        id: 3,
        lable: "Garmin",
        type: "GARMIN",
        img: "/images/Garmin-icon.svg",
    },
    {
        id: 4,
        lable: "Google FIt",
        type: "GOOGLE",
        img: "/images/Google-FIt-icon.svg",
    },
    {
        id: 5,
        lable: "Oura",
        type: "OURA",
        img: "/images/Oura-icon.svg",
    },
    {
        id: 6,
        lable: "Samsung",
        type: "SAMSUNG",
        img: "/images/Samsung-icon.svg",
    },
    {
        id: 7,
        lable: "Withings",
        type: "WITHINGS",
        img: "/images/Withings-icon.svg",
    },
]