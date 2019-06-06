export const loginUser = (user) => {
  debugger;
  return dispatch => {
    dispatch({ type: "LOADING_LOGIN" });
    return fetch("http://localhost:3000/api/v1/login",
    {
      method: 'POST', // or 'PUT'
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user ) // data can be `string` or {object}!
    })
      .then(resp => resp.json())
      .then(data => {
        const { token, user } = data;
        localStorage.setItem("token", token);
        dispatch( {type: "LOGIN_USER", payload: user} );
      })
  }
}
