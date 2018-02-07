import axios from 'axios';

const remindersSaved = (saved) => {
  return {
    type: 'REMINDERS_SAVED',
    saved
  };
};

const storeReminders = (reminders) => {
  return {
    type: 'STORE_REMINDERS',
    reminders
  };
};

const startStoreReminders = (updatedRemindersArr) => {
  return (dispatch) => {
    // make call to api
    axios
      .post('/api/update_reminders', { reminders: updatedRemindersArr })
      .then((res) => {
        // if success status is true, dispatch storeReminders
        if (res.data.success) {
          dispatch(storeReminders(updatedRemindersArr));
          // set remindersSaved to true
          dispatch(remindersSaved(true));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { startStoreReminders, remindersSaved };
