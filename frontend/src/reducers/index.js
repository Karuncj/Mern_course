import {combineReducers} from 'redux';
import users from './userReducer';

const rootReducer = combineReducers({
  // I could use shorthand property name and omit the right side
  users: users
})

export default rootReducer;
