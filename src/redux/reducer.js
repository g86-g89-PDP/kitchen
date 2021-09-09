import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE":
            let dines = [...state.dine];
            dines.splice(action.payload, 1);
            return { ...state, dines };

        case "ADD":
            return { ...state, selected: [...state.selected, action.payload] }

        default: return state;
    }
}
export default Reducer