import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';


import {loginUser} from '../actions/userActions';

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    margin: "10% auto",
  },
  formControl: {
    margin: theme.spacing(2),
  },
}));

const Login = (props) => {

  const [formData, setFormData] = useState({username: "", password: ""});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser(formData);
    setFormData({username: "", password: ""});
    props.history.push("/");
  }

  const classes = useStyles();

  return (
    <div id="login" className={classes.root}>
      <Typography variant="h5">
        LOGIN
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="username">Username</InputLabel>
         <Input
           id="username"
           name="username"
           onChange={handleChange}
           aria-describedby="username-text"
           value={formData.username}
           required
           startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
            }
         />
         <FormHelperText id="username-text">Enter your username</FormHelperText>
        </FormControl><br/>

        <FormControl fullWidth className={classes.formControl}>
         <InputLabel htmlFor="password">Password</InputLabel>
         <Input
           id="password"
           name="password"
           onChange={handleChange}
           aria-describedby="password-text"
           value={formData.password}
           required
           type="password"
           startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
            }
         />
         <FormHelperText id="password-text">Enter your password</FormHelperText>
        </FormControl><br/>

        <FormControl className={classes.formControl}>
         <Button
           type="submit"
         >Submit</Button>
        </FormControl><br/>

      </form>
    </div>
  )
}

// <input name="username" placeholder="enter user name here" onChange={handleChange} value={formData.username}/>
// <input type="password" name="password" placeholder="enter password here" onChange={handleChange} value={formData.password}/>
// <input type="submit" name="submit" />

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: userData => dispatch(loginUser(userData))
  };
}

// export default connect(null, (dispatch) => {
//   return {loginUser};
// })(Login)
export default connect(null, mapDispatchToProps)(Login)
// export default connect(null, mapDispatchToProps)(withRouter(Login))
