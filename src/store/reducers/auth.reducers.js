const initState = {
  authError: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, authError: "" };
    case "LOGIN_ERROR":
      return { ...state, authError: action.error.message };
    case "LOGOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
