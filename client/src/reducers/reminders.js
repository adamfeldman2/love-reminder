const defaultState = () => {
  const arr = [];

  for (let i = 0; i < 365; i++) {
    arr.push({ label: `day${i + 1}`, text: '', sendDate: null });
  }

  return {
    remindersArr: arr,
    remindersSaved: 'no changes',
    recipient: null,
    recipientSaved: 'no changes'
  };
};

const remindersReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case 'STORE_REMINDERS':
      return { ...state, remindersArr: [...action.reminders] };

    case 'REMINDERS_SAVED':
      return { ...state, remindersSaved: action.saved };

    case 'SET_RECIPIENT':
      return { ...state, recipient: action.recipient };

    case 'RECIPIENT_SAVED':
      return { ...state, recipientSaved: action.saved };

    default:
      return state;
  }
};

export default remindersReducer;
