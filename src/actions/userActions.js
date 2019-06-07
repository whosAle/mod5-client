const LOGIN_ENDPOINT = "http://localhost:3000/api/v1/login";
const SIGNUP_ENDPOINT = "http://localhost:3000/api/v1/users";

export const loginUser = (user) => {
  // debugger;
  return dispatch => {
    dispatch({ type: "LOADING_LOGIN" });
    return fetch(LOGIN_ENDPOINT,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user ) // data can be `string` or {object}!
    })
      .then(resp => resp.json())
      .then(data => {
        const { token, user } = data;
        debugger;
        localStorage.setItem("token", token);
        dispatch( {type: "LOGIN_USER", payload: user} );
      })
  }
}

export const signUpUser = (user) => {
  // debugger;
  return dispatch => {
    dispatch({ type: "LOADING_SIGNUP" });
    return fetch(SIGNUP_ENDPOINT,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user ) // data can be `string` or {object}!
    })
      .then(resp => resp.json())
      .then(data => {
        const { token, user } = data;
        debugger;
        localStorage.setItem("token", token);
        dispatch( {type: "LOGIN_USER", payload: user} );
      })
  }
}
