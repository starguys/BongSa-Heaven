import {createAction, handleActions} from "redux-actions";

const CHANGENAME = "mailWriteName/CHANGENAME";

export const changeName = createAction(CHANGENAME, (value: any) => value);

const initialState = {
  name: "하이맨",
};

const mailWriteName = handleActions(
  {
    [CHANGENAME]: (state: any, {payload: value}: any) => ({name: value}),
  },
  initialState,
);

export default mailWriteName;
