import {createAction, handleActions} from "redux-actions";

const ADDLIST = "mailDeleteList/ADDLIST";
const DELETLIST = "mailDeleteList/DELETLIST";
const RESETLIST = "mailDeleteList/RESETLIST";

export const addList = createAction(ADDLIST, id => id);
export const deleteList = createAction(DELETLIST, id => id);
export const resetList = createAction(RESETLIST);

const initialState = {
  list: [],
};

const mailDeleteList = handleActions(
  {
    [ADDLIST]: (state, {payload: id}) => state.concat(id),
    [DELETLIST]: (state, {payload: id}) => state.filter(el => el !== id),
    [RESETLIST]: (state, {payload: id}) => (state = []),
  },
  initialState,
);

export default mailDeleteList;
