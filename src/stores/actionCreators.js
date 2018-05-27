import {
  FOCUS_ON_CREATE_ROOM_INPUT,
} from './actionTypes';

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}


export const focusOnCreateRoomInput = (bool) => {
  return {
    type: FOCUS_ON_CREATE_ROOM_INPUT,
    createRoomInputFocused: bool,
  };
}
