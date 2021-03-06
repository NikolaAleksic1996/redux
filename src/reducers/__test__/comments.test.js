import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it('handle actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment'])
})

it('handle actions with unknown type', () => {
  const newState = commentsReducer([], {type: 'fasdf'})

  expect(newState).toEqual([])
})