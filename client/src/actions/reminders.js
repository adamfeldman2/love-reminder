import axios from 'axios';

const storeReminders = (reminders) => {
  return {
    type: 'STORE_REMINDERS',
    reminders
  };
};

const startStoreReminders = (currentRemindersState, updatedReminders) => {
  return (dispatch) => {
    let updatedReminderEntries = Object.entries(updatedReminders);

    // loop over all reminder inputs with a value
    for (let i = 0; i < Object.keys(updatedReminders).length; i++) {
      // loop over all 365 items in state
      for (let j = 0; j < currentRemindersState.length; j++) {
        // if the label in the state matches an input that has a value & the values of the text properties are different
        if (
          currentRemindersState[j].label === updatedReminderEntries[i][0] &&
          currentRemindersState[j].text !== updatedReminderEntries[i][1]
        ) {
          // update the text value of that item in the state
          currentRemindersState[j].text = updatedReminderEntries[i][1];
        }
      }
    }
    // make call to api
    axios
      .post('/api/update_reminders', { reminders: currentRemindersState })
      .then((res) => {
        // if success status is true, dispatch storeReminders
        if (res.data.success) {
          dispatch(storeReminders(currentRemindersState));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { startStoreReminders };
