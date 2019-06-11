
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
      // debugger;
      return action.payload;
    case "TAKE_PROJECT":
      console.log("taking on a project", action.payload);
      // debugger;
      // const project = state.find(proj => proj.id === action.payload.id);
      // project.inprogress = true
      // project.doer_id = action.payload.doer_id
      // project = {...project, inprogress: true, doer_id: action.payload.doer_id}
      const newState = state.map(proj => proj.id === action.payload.id ? action.payload : proj)
      return newState;
    default:
      return state;
  }

}