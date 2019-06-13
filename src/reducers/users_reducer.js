
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
    case "CONTRIBUTE_PROJECT":
      console.log("contriubted user:", action.payload.user);
      return action.payload.user;
    default:
      return state;
  }

}
