const backendEndpoint = "http://localhost:3000/api/v1/graphql";

export const loginUser = () => {
  return dispatch => {
    const query = `
      query {
        projects() {
          base_capital
          location
          description
          category
          completed
          inprogress
        }
      }
    `;
    dispatch({ type: "LOADING_LOGIN" });
    return fetch(backendEndpoint,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( query )
    })
      .then(resp => resp.json())
      .then(data => {
        const { projects } = data;
        dispatch( {type: "FETCH_PROJECTS", payload: projects} );
      })
  }
}
