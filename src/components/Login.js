import React, { useState } from 'react';
import { connect } from 'react-redux';

import {loginUser} from '../actions/userActions';



const Login = (props) => {

  const [formData, setFormData] = useState({username: "", password: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser(formData);
    // props.handleSubmit(formData);
  }
  // debugger;
  return (
    <div id="login">
      LOGIN PAGE!
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="enter user name here" onChange={handleChange} value={formData.username}/>
        <input type="password" name="password" placeholder="enter password here" onChange={handleChange} value={formData.password}/>
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: userData => dispatch(loginUser(userData))
  };
}

// export default connect(null, (dispatch) => {
//   return {loginUser};
// })(Login)
export default connect(null, mapDispatchToProps)(Login)
