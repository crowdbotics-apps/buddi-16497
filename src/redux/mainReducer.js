import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard136383Reducer from '../features/Dashboard136383/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard136383: Dashboard136383Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});