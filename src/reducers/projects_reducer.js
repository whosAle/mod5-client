
export default function usersReducer(state=[], action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    case "REMOVE_PROJECT":
      return state.filter(proj => proj.id !== action.payload);
    case "LOADING_PROJECTS":
      console.log("loading projects");
      return state;
    case "FETCH_PROJECTS":
      return [action.payload, ...state];
    default:
      return state;
  }

}
