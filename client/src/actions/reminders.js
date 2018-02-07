import axios from 'axios';
import updateSendDates from '../utils/updateSendDates';

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

const startStoreReminders = (updatedRemindersArr, save = true) => {
  return (dispatch) => {
    // make call to api
    axios
      .post('/api/update_reminders', { reminders: updatedRemindersArr })
      .then((res) => {
        // if success status is true, dispatch storeReminders
        if (res.data.success) {
          dispatch(storeReminders(updatedRemindersArr));

          if (save) {
            // set remindersSaved to true
            dispatch(remindersSaved(true));
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const startSetDates = (startDate, currentRemindersArr) => {
  const reminders = updateSendDates(startDate, currentRemindersArr);

  return (dispatch) => {
    dispatch(startStoreReminders(reminders, false));
  };
};

export { storeReminders, startStoreReminders, remindersSaved, startSetDates };
