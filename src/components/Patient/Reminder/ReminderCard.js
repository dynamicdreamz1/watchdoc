import React from 'react'
import RemindDay from './RemindDay'
import ReminderIcon from './ReminderIcon'
import ReminderOptions from './ReminderOptions'
import ReminderTime from './ReminderTime'
import ReminderTitle from './ReminderTitle'
import { DeletereminderCard } from '../../../services/ClinicianService'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ReminderCard({reminderData,latestData,fetchData}) {
  const handleClickDeleteReminder=async()=>{
    const formData=new FormData()
    formData.append("user_id",latestData?.user_data?.id)
    formData.append("reminder_id",reminderData?.reminder_id)
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete reminder',
        limit:1,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });
  
      if (result.isConfirmed) {
        const res = await DeletereminderCard(formData);       
        fetchData()
        toast.success(res?.data?.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });

      }
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",

      });
    }
    

}
  return (
    <>

    <div className='reminder-card'>
        <ReminderOptions handleClickDeleteReminder={handleClickDeleteReminder}/>
        <div className='icon-block'>
            <ReminderIcon/>
        </div>
        <div className='content-block'>
            <ReminderTitle reminderType={reminderData?.reminder_type}/>
            <RemindDay reminderDay={reminderData?.day}/>
            <ReminderTime reminderTime={reminderData?.time}/>
        </div>
    </div>
    </>
  )
}
