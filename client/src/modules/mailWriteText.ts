import {createAction, handleActions} from "redux-actions";

const CHANGETEXT = "mailWriteText/CHANGETEXT";

export const changeText = createAction(CHANGETEXT, (text: any) => text);

const initialState = {
  text: "하이바이하이맨맨~",
};

const mailWriteText = handleActions(
  {
    [CHANGETEXT]: (state: any, {payload: text}: any) => ({text: text}),
  },
  initialState,
);

export default mailWriteText;
