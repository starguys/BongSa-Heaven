import {createAction, handleActions} from "redux-actions";

const ADDLIST = "mailDeleteList/ADDLIST";
const DELETLIST = "mailDeleteList/DELETLIST";
const RESETLIST = "mailDeleteList/RESETLIST";

export const addList = createAction(ADDLIST, (id: any) => id);
export const deleteList = createAction(DELETLIST, (id: any) => id);
export const resetList = createAction(RESETLIST);

const initialState = {
  list: [],
};

const mailDeleteList = handleActions(
  {
    [ADDLIST]: (state: any, {payload: id}: any) => state.concat(id),
    [DELETLIST]: (state: any, {payload: id}: any) =>
      state.filter((el: any) => el !== id),
    [RESETLIST]: (state: any, {payload: id}: any) => (state = []),
  },
  initialState,
);

export default mailDeleteList;
