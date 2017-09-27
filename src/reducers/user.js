import { USER_LOGGED_IN } from '../types';

export default function user(state = {}, action = {}) {
  switch(action.type) {
    case USER_LOGGED_IN:
    console.log(action.user);
      return action.user;
    default:
      return state;
  }
}
