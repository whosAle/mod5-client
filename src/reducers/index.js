import {combineReducers } from 'redux';

import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  projects: projectsReducer
});

export default rootReducer
