import { RootAction, RootInitialState } from "../../slice/rootSlice";

export const setRootIdAction = (state: RootInitialState, action: RootAction) => {
    state.value.id = action.payload;
}