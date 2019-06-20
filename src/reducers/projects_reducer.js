
export default function usersReducer(state=[], action) {
  let newState;
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("adding project....", action.payload);
      return [...state, action.payload];
    case "REMOVE_PROJECT":
      return state.filter(proj => proj.id !== action.payload);
    case "LOADING_PROJECTS":
      console.log("loading projects");
      return state;
    case "FETCH_PROJECTS":
      // debugger;
      return action.payload;
    case "TAKE_PROJECT":
      console.log("taking on a project", action.payload);
    
      newState = state.map(proj => proj.id === action.payload.id ? action.payload : proj)
      return newState;
    case "COMPLETE_PROJECT":
      newState = state.map(proj => proj.id === action.payload.id ? action.payload : proj)
      return newState;
    case "CONTRIBUTE_PROJECT":
      newState = state.map(proj => proj.id === action.payload.project.id ? action.payload.project : proj)
      return newState;
    default:
      return state;
  }

}
