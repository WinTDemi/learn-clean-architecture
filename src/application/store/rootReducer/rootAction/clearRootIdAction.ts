import { RootInitialState } from "../rootSlice/rootSlice";

export const clearRootIdAction = (state: RootInitialState) => {
    state.value.id = 0
}