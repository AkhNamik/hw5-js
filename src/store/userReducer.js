const initialState = {
    text: "",
  };
  
  export default function UserReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_USERS":
        return { ...state, text: action.payload.results[0].name};
      default:
        return state;
    }
  }
  