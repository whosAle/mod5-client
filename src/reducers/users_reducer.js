
export default function usersReducer(state={user: {}}, action) {
  switch (action.type) {
    case "LOADING_LOGIN":
      return {...state, loading: true};
    case "LOGIN_USER":
      // return {loading: false, pictures: action.payload};
      // debugger;
      console.log("user is logging in.....", action.payload);
      return {...state, user: action.payload};
      break;
    default:
      return state;
  }

}
