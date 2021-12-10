import {createAction, handleActions} from "redux-actions";

const CHANGETEXT = "mailWriteText/CHANGETEXT";

export const changeText = createAction(CHANGETEXT, text => text);

const initialState = {
  text: "하이바이하이맨맨~",
};

const mailWriteText = handleActions(
  {
    [CHANGETEXT]: (state, {payload: text}) => ({text: text}),
  },
  initialState,
);

export default mailWriteText;
