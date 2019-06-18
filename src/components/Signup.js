import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import {signUpUser} from '../actions/userActions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing(1),
  },
}));

const SignUp = (props) => {

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

  const classes = useStyles();

  return (
    <div id="login">
      Sign Up PAGE!
      <form onSubmit={handleSubmit}>
        <FormControl >
         <InputLabel htmlFor="username">Username</InputLabel>
         <Input
           id="username"
           name="username"
           onChange={handleChange}
           aria-describedby="username-text"
           value={formData.username}
           fullWidth={true}
           required
         />
         <FormHelperText id="username-text">Some important helper text</FormHelperText>
        </FormControl><br/>

        <FormControl className={classes.formControl}>
         <InputLabel htmlFor="password">Password</InputLabel>
         <Input
           id="password"
           name="password"
           onChange={handleChange}
           aria-describedby="password-text"
           value={formData.password}
           fullWidth={true}
           required
           type="password"
         />
         <FormHelperText id="password-text">Please use a secure password</FormHelperText>
        </FormControl><br/>

        <FormControl className={classes.formControl}>
         <InputLabel htmlFor="first-name">First Name</InputLabel>
         <Input
           id="first-name"
           name="first-name"
           onChange={handleChange}
           aria-describedby="first-name-text"
           value={formData.firstName}
           required
           fullWidth={true}
         />
        </FormControl><br/>

        <FormControl className={classes.formControl}>
         <InputLabel htmlFor="last-name">Last Name</InputLabel>
         <Input
           id="last-name"
           name="last-name"
           onChange={handleChange}
           aria-describedby="last-name-text"
           value={formData.lastName}
           required
           fullWidth={true}
         />
        </FormControl><br/>

        <FormControl className={classes.formControl}>
         <InputLabel htmlFor="bio">Bio</InputLabel>
         <Input
           id="bio"
           name="bio"
           onChange={handleChange}
           aria-describedby="bio-text"
           value={formData.bio}
           fullWidth={true}
           multiline
           rows="3"
         />
         <FormHelperText id="password-text">Tell us about yourself</FormHelperText>
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

// <input type="password" name="password" placeholder="enter password here" onChange={handleChange} value={formData.password}/>
// <input name="first-name" placeholder="First Name" onChange={handleChange} value={formData.firstName}/>
// <input name="last-name" placeholder="Last Name" onChange={handleChange} value={formData.lastName}/>
// <input name="bio" placeholder="Tell Us About Yourself" onChange={handleChange} value={formData.bio}/>
//
// <input type="submit" name="submit" />

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inUser: userData => dispatch(loginUser(userData))
//   };
// }

// export default connect(null, (dispatch) => {
//   return {loginUser};
// })(SignUp)
export default connect(null, {signUpUser})(SignUp)
// export default connect(null, mapDispatchToProps)(withRouter(Login))
