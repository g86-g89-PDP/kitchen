import initialState from "./initialState";

const Reducer=(state=initialState, action)=>{
    switch (action.type) {
        case "DELETE":
            let dines = [...state.dine];
            dines.splice(action.payload, 1);
            return { ...state, dines };

       default: return state;
    }
}
export default Reducer