import {createAction, handleActions} from "redux-actions";

const CHANGENAME = "mailWriteName/CHANGENAME";

export const changeName = createAction(CHANGENAME, value => value);

const initialState = {
  name: "하이맨",
};

const mailWriteName = handleActions(
  {
    [CHANGENAME]: (state, {payload: value}) => ({name: value}),
  },
  initialState,
);

export default mailWriteName;
