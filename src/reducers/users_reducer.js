
export default function usersReducer(state={}, action) {
  switch (action.type) {
    case "LOADING_LOGIN":
      return {...state, loading: true};
    case "LOGIN_USER":
      // return {loading: false, pictures: action.payload};
      // debugger;
      console.log("user is logging in.....", action.payload);
      return action.payload;
    case "LOADING_SIGNUP":
      return {...state, loading: true};
    default:
      return state;
  }

}
