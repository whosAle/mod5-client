const LOGIN_ENDPOINT = "http://localhost:3000/api/v1/login";
const SIGNUP_ENDPOINT = "http://localhost:3000/api/v1/users";

export const loginUser = (user) => {
  return dispatch => {
    dispatch({ type: "LOADING_LOGIN" });
    return fetch(LOGIN_ENDPOINT,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user )
    })
      .then(resp => resp.json())
      .then(data => {
        const { token, user } = data;
        localStorage.setItem("token", token);
        dispatch( {type: "LOGIN_USER", payload: user} );
      })
  }
}

export const signUpUser = (user) => {
  return dispatch => {
    dispatch({ type: "LOADING_SIGNUP" });
    return fetch(SIGNUP_ENDPOINT,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user )
    })
      .then(resp => resp.json())
      .then(data => {
        const { token, user } = data;
        localStorage.setItem("token", token);
        dispatch( {type: "LOGIN_USER", payload: user} );
      })
  }
}

export const logOutUser = () => ({type: "LOGOUT"});
