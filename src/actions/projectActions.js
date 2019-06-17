const backendEndpoint = "http://localhost:3000/api/v1/graphql";
const PROJECTS_ENDPOINT = "http://localhost:3000/api/v1/projects";
const TRANSACTIONS_ENDPOINT = "http://localhost:3000/api/v1/transactions";

export const fetchProjects = () => {
  return dispatch => {
    const query = `
      query {
        projects{
          base_capital
          location
          description
          category
          completed
          inprogress
        }
      }
    `;
//     const query = `
//   query {
//     user(id: 1) {
//       id
//       username
//       bio
//     }
//   }
// `;
  //   dispatch({ type: "LOADING_LOGIN" });
  //   return fetch(backendEndpoint,
  //   {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify( query )
  //     body: JSON.stringify( {query} )
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log("project fetcj data:", data);
  //       // const projects  = data.data.projects;
  //       // dispatch( {type: "FETCH_PROJECTS", payload: projects} );
  //     })
  // }
    dispatch({ type: "LOADING_LOGIN" });
    return fetch(PROJECTS_ENDPOINT)
      .then(resp => resp.json())
      .then(data => {
        console.log("project fetcj data:", data);
        // const projects  = data.data.projects;
        dispatch( {type: "FETCH_PROJECTS", payload: data} );
      })
  }
}

export const takeProject = (project_id, doer_id) => {
  const token = localStorage.getItem("token");
  const query = `
  mutation {
    takeProject(id:${project_id}, doer_id: ${doer_id}) {
      id
      title
      description
    }
  }
  `
  // return dispatch => {
  //   // dispatch({ type: "LOADING_SIGNUP" });
  //   return fetch(backendEndpoint,
  //   {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify( {query} )
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       // const { token, user } = data.data;
  //       console.log("DATATA", data);
  //       dispatch( {type: "TAKE_PROJECT", payload: data.data} );
  //     })
  // }
  return dispatch => {
    return fetch(PROJECTS_ENDPOINT+`/`+project_id,
    {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify( {id: project_id, doer_id: doer_id} )
    })
      .then(resp => resp.json())
      .then(data => {
        // const { token, user } = data.data;
        console.log("DATATA", data);
        dispatch( {type: "TAKE_PROJECT", payload: data} );
      })
  }
}

export const createProject = (projectData) => {
  const token = localStorage.getItem("token");
  return dispatch => {
    return fetch(PROJECTS_ENDPOINT,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify( projectData )
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch( {type: "ADD_PROJECT", payload: data} );
      })
  }
}

export const completeProject = (id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    return fetch(PROJECTS_ENDPOINT+"/complete",{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({project_id: id})
    })
      .then(resp => resp.json())
      .then((data) => {
        dispatch( {type: "COMPLETE_PROJECT", payload: data} );
      })
  }
}

export const contributeCapital = (amount, projectId, userId) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    return fetch(TRANSACTIONS_ENDPOINT+"/contribute",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({amount: amount, user_id: userId, project_id: projectId})
    })
      .then(resp => resp.json())
      .then((data) => {
        debugger
        if (!data.error) {
          dispatch( {type: "CONTRIBUTE_PROJECT", payload: data} );
        }
        // dispatch( {type: "COMPLETE_PROJECT", payload: data} );
      })
  }
}
