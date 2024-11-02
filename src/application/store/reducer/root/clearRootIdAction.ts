import { RootInitialState } from "../../slice/rootSlice";

export const clearRootIdAction = (state: RootInitialState) => {
    state.value.id = 0
}