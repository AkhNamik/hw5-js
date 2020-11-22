const initialState = {
    text: "",
  };
  
  export default function JokeReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_JOKE":
        return { ...state, text: action.payload.joke };
      default:
        return state;
    }
  }
  