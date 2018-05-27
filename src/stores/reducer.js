import {
  FOCUS_ON_CREATE_ROOM_INPUT,
} from './actionTypes';

export default (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    ...state,
    dupa: action.payload,
   }
  case FOCUS_ON_CREATE_ROOM_INPUT:
   return {
     ...state,
     createRoomInputFocused: action.createRoomInputFocused,
   }
  default:
   return state
 }
}
