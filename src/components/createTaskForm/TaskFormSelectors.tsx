import { RootState } from "../../store/store";

const getRoot = (state: RootState) => state.TaskFormSlice

export const getTasks = (state: RootState) => getRoot(state).tasks