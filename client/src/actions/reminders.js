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

const recipientSaved = (saved) => {
  return {
    type: 'RECIPIENT_SAVED',
    saved
  };
};

const setRecipient = (recipient) => {
  return {
    type: 'SET_RECIPIENT',
    recipient
  };
};

const startSetRecipient = (recipient) => {
  return (dispatch) => {
    axios
      .post('/api/set_recipient', { recipient })
      .then((res) => {
        if (res.data.success) {
          dispatch(setRecipient(recipient));
          dispatch(recipientSaved(true));
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  };
};

export {
  startSetRecipient,
  recipientSaved,
  storeReminders,
  startStoreReminders,
  remindersSaved,
  startSetDates
};
