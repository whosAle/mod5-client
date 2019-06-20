import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/navbar.css';


import {logOutUser} from '../actions/userActions';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';


function NavBar(props) {

  console.log(localStorage.getItem("token"));

  return (
    <nav>
    {  console.log(localStorage.getItem("token"))
}
      <div className="nav-wrapper">
        <NavLink to="/" exact>The Good Economy Project</NavLink>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about" exact>About</NavLink>
        { localStorage.getItem("token") === "" ?
        <>
        <NavLink to="/login" exact>Login</NavLink>
        <NavLink to="/signup" exact>Join</NavLink>
        </>
        :
        <>
        <NavLink to="/" onClick={() => props.logOutUser()}>Log Out</NavLink>
        <NavLink to="/profile" exact>Profile</NavLink>
        </>
        }
{/*        <a href="#" className="">The Good Economy Project</a>
        <ul id="" className="">
          <li><a href="#">New Project</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
*/}

      </div>
    </nav>
  );
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#94D1BE",
    // backgroundColor: "#DAF0EE",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  options: {
    flexGrow: 2,
  },
  button: {
    margin: theme.spacing(1),
    colorSecondary: "#E8AEB7"
  },
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="default">
        <Toolbar>

            <Grid container justify="flex-start" direction="row">
              <Button variant="full-width" href="/" color="default" className={null}>The Good Economy Project</Button>

            </Grid>
            <Grid container justify="flex-end" direction="row">
              <Button href="/explore" color="default" className={classes.button}>Explore</Button>
              <Button href="/about" color="default" className={classes.button}>About</Button>




          { localStorage.getItem("token") === "" ?
            (<>
            <Button href="/login" color="default" className={classes.button}>Login</Button>
            <Button href="/signup" variant="contained" color="secondary" size="small" className={classes.button}>Join</Button>
            </>)
            :
            (
            <div className={null}>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><NavLink to="/profile" exact>Profile</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/" onClick={() => props.logOutUser()}>Log Out</NavLink>
</MenuItem>
              </Menu>
            </div>
          )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default connect(state => ({user: state.user}), {logOutUser})(MenuAppBar)
// export default connect(state => ({user: state.user}), {logOutUser})(NavBar)
