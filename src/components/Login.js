import React, { useState } from 'react';



const Login = (props) => {

  const [formData, setFormData] = useState({username: "", password: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(formData);
  }

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

export default Login
