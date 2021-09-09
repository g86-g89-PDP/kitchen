import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      let selecteds = [...state.selected];
      selecteds.splice(action.payload, 1);
      return { ...state, selected: selecteds };

    case "ADD":
      return { ...state, selected: [...state.selected, action.payload] };

    default:
      return state;
  }
};
export default Reducer;
