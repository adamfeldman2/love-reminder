const defaultState = () => {
  const arr = [];

  for (let i = 0; i < 365; i++) {
    arr.push({ label: `day${i + 1}`, text: '', sendDate: null });
  }

  return { remindersArr: arr };
};

const remindersReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case 'STORE_REMINDERS':
      return { ...state, remindersArr: [...action.reminders] };

    default:
      return state;
  }
};

export default remindersReducer;
