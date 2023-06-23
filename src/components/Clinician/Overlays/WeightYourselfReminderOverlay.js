import React, { useEffect, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { StoreReminderData } from "../../../services/ClinicianService";
import { day } from "../../../Utility/DefaultObject";
import { toast } from "react-toastify";
import SimpleBackdrop from "../../../Utility/Skeleton";

export default function WeightYourselfReminderOverlay({ actionReminderDay }) {
  const {
    filterDay,
    reminderType,
    latestData,
    setOpen,
    fetchData,
    setOpenReminder,
    reminderTitle,
    setReminderTitle,
  } = actionReminderDay;
  const [checked, setChecked] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [titleError, setTitleError] = useState("");
  const [daysError, setDaysError] = useState("");
  const [spinner,setSpinner]=useState(false)

  const handleTimeChange = (date) => {
    setSelectedDate(date);
  };

  const extractTimeData = (date) => {
    if (date) {
      const time = dayjs(date).format("hh:mm A");
      let time_in_hour = dayjs(date).hour();
      const time_in_mint = dayjs(date).minute();
      const time_am_pm = dayjs(date).format("A");
      const time_zone = dayjs(date).format("Z");

      if (time_in_hour > 12) {
        time_in_hour -= 12;
      }

      return {
        time,
        time_in_hour,
        time_in_mint,
        time_am_pm,
        time_zone,
      };
    }

    return null;
  };

  useEffect(() => {
    if (filterDay !== undefined) {
      setChecked(filterDay);
    }
  }, [filterDay]);

  const handleToggle = (value) => () => {
    const currentIndex = checked?.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleTitleChange = (event) => {
    setReminderTitle(event.target.value);
    setTitleError("");
  };

  const handleClickAddReminder = async () => {
    setSpinner(true)
    if (reminderTitle.trim() === "") {
      setTitleError("Reminder title is required");
      setTimeout(() => setTitleError(""), 2000);
    }
    if (checked?.length === 0) {
      // setDaysError('Please select at least one day')
      toast.error("Please select at least one day", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setTimeout(() => setDaysError(""), 2000);
    }
    if (reminderTitle.trim() !== "" && checked?.length > 0) {
      const timeData = extractTimeData(selectedDate);
      const remindertypevalue = reminderType === "medication" ? 3 : reminderType === "weight" ? 1 : reminderType === "blood_pressure"? 2: reminderType === "custome"? 4: "";
      const formData = new FormData();
      formData.append("user_id", latestData?.user_data?.id);
      formData.append("reminder_title", reminderTitle);
      formData.append("reminder_id", remindertypevalue);
      formData.append("time", timeData?.time);
      formData.append("time_in_hour", timeData?.time_in_hour);
      formData.append("time_in_mint", timeData?.time_in_mint);
      formData.append("time_am_pm", timeData?.time_am_pm);
      formData.append("day", checked);
      formData.append("time_zone", timeData?.time_zone);
      const response = await StoreReminderData(formData);
      setOpen(false);
      if (response?.status === 200) {
        setOpenReminder(false);
        await fetchData();
        toast.success(response?.data?.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    }
    setSpinner(false)
  };

  return (
    <>
    <SimpleBackdrop open={spinner} />
      <div className="high-heart-rate">
        <div className="dialog-title">
          <h2>{reminderType ? reminderType : ""} Yourself</h2>
          <p>
            We recommend you {reminderType ? reminderType : ""} yourself between
            two and seven times a week in the morning before breakfast.
          </p>
        </div>
        <form>
          <div>
            <TextField
              label="Reminder Title"
              variant="outlined"
              fullWidth
              value={reminderTitle}
              onChange={handleTitleChange}
              error={Boolean(titleError)}
              helperText={titleError}
            />
          </div>
          <div className="clock-title">
            <img src="/images/clock-icon.svg" alt="Click Icon" />
            <span className="days-data">Time</span>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Basic time picker"
              value={selectedDate}
              onChange={handleTimeChange}
            />
          </LocalizationProvider>
          <div className="clock-title">
            <img src="/images/clock-icon.svg" alt="Click Icon" />
            <span className="days-data">Days</span>
          </div>
          <List
            dense
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {day?.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value.id}`;
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value.id)}
                      checked={checked.indexOf(value.id) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                      className="Every Monday"
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <div className="radio-item">
                      <label htmlFor="monday">Every {value.day}</label>
                    </div>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          {daysError && <div className="error-text">{daysError}</div>}
          <div className="submit-block">
            <button
              type="button"
              className="btn"
              onClick={handleClickAddReminder}
            >
              Add Reminder
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
