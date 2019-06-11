import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';


import {signUpUser} from '../actions/userActions';



const Login = (props) => {

  const [formData, setFormData] = useState({username: "", password: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUpUser(formData);
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      bio: ""
    });
    props.history.push("/")
    // props.handleSubmit(formData);
  }
  // debugger;
  return (
    <div id="login">
      Sign Up PAGE!
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="enter user name here" onChange={handleChange} value={formData.username}/>
        <input type="password" name="password" placeholder="enter password here" onChange={handleChange} value={formData.password}/>
        <input name="first-name" placeholder="First Name" onChange={handleChange} value={formData.firstName}/>
        <input name="last-name" placeholder="Last Name" onChange={handleChange} value={formData.lastName}/>
        <input name="bio" placeholder="Tell Us About Yourself" onChange={handleChange} value={formData.bio}/>

        <input type="submit" name="submit" />
      </form>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inUser: userData => dispatch(loginUser(userData))
//   };
// }

// export default connect(null, (dispatch) => {
//   return {loginUser};
// })(Login)
export default connect(null, {signUpUser})(Login)
// export default connect(null, mapDispatchToProps)(withRouter(Login))
