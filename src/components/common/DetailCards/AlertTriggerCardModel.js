import { Dialog } from '@mui/material'
import React, { useState } from 'react'

const AlertTriggerCardModel = ({ openTriggerType, openTriggerModel, handleClose, updatedAlertTrigger }) => {
    const [selectedTrigger, setSelectedTrigger] = useState("OFF");

    // Function to map values based on keywords
    const mapValues = (str) => {
        if (str.includes("high")) {
            return ["OFF", 100, 110, 120, 130, 140, 150];
        } else if (str.includes("low")) {
            return ["OFF", 10, 20, 30, 40, 50, 60];
        } else {
            // Default values
            return ["OFF", 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        }
    };

    const data = mapValues(openTriggerType);

    const updateTrigger = (value) => {
        setSelectedTrigger(value);
    };

    return (
        <Dialog
            open={openTriggerModel}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='reminder-overlay'
        >
            {data.map((value, index) => (
                <div key={index} onClick={() => updateTrigger(value)} style={{ backgroundColor: selectedTrigger === value ? '#00B8E2' : '' }} className='dd-alert-card d-flex'>
                    <div className='text-block d-flex align-items-center'>
                        <div>
                            <span className='title'>{value === "OFF" ? value : `${value} BPM`}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div onClick={() => updatedAlertTrigger(selectedTrigger)} className='dd-alert-submit'>Submit</div>
        </Dialog>
    )
}

export default AlertTriggerCardModel
