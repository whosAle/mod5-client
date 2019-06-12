
export default function usersReducer(state={}, action) {
  switch (action.type) {
    case "LOADING_LOGIN":
      return {...state, loading: true};
    case "LOGIN_USER":
      debugger;
      console.log("user is logging in.....", action.payload);
      return action.payload;
    case "LOADING_SIGNUP":
      return {...state, loading: true};
    case "LOGOUT":
      console.log("logging out!");
      localStorage.setItem("token", "");
      return {};
    default:
      return state;
  }

}
