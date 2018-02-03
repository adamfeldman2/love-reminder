import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import remindersReducer from '../reducers/reminders';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      reminders: remindersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
