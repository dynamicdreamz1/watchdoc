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
export const DefaultHeartmeasurment = {
    "status": "high",
    "icon": "heart-rate-icon.svg",
    "type": "Heart Rate",
    "result": '',
    "label": "bpm",
    "time": ""

}

export const DefaultBloodPressuerMeasurment = {
    "status": "high",
    "icon": "heart-rate-icon.svg",
    "type": "Heart Rate",
    "result": '',
    "label": "bpm",
    "time": ""
}


export const DefaultBloodOygenMeasurment = {
    "status": "normal",
    "icon": "blood-oxygen-icon.svg",
    "type": "Blood Oxygen",
    "result": "97",
    "label": "%",
    "time": "1 min ago"
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

        "status": "normal",
        "icon": "blood-oxygen-icon.svg",
        "type": "Blood Pressure",
        "result": "",
        "label": "bpm",
        "time": "1 min ago"
    },
    {
        "key": "blood_oxygen",

        "status": "normal",
        "icon": "blood-oxygen-icon.svg",
        "type": "Blood Oxygen",
        "result": "",
        "label": "bpm",
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