import { RootAction, RootInitialState } from "../rootSlice/rootSlice";

export const setRootIdAction = (state: RootInitialState, action: RootAction) => {
    state.value.id = action.payload;
}