
export default function usersReducer(state={}, action) {
  switch (action.type) {
    case "LOADING_LOGIN":
      return {...state, loading: true};
    case "LOGIN_USER":
      return {loading: false, pictures: action.payload};
    default:
      return state;
  }

}
