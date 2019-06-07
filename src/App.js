import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
// import { withRouter } from "react-router";


import logo from './logo.svg';
import './App.css';


import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';

const backendEndpoint = "http://localhost:3000/api/v1/graphql"
const currentUserEndpoint = "http://localhost:3000/api/v1/current_user";

class App extends Component {



  componentDidMount() {
    const token = localStorage.getItem("token")

    console.log('token is', token);
    if(token) {

      const query =
      fetch(currentUserEndpoint, {
        headers: {
          Authorization: token
        }
      })
      .then(r => r.json())
      .then((user) => {
        if (!user.error) {
          this.setState({currentUser: user})
          console.log("success!", user);
        } else {
          console.error(user.error);
        }
      })

    }
  }

  render(){
    console.log(this.props);
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </div>

    );
  }
}
// function App(props) {
//
//   const onLogin = (formData) => {
//     fetch()
//     fetch("http://localhost:3000/api/v1/login",
//     {
//       method: 'POST', // or 'PUT'
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify( formData ) // data can be `string` or {object}!
//     })
//       .then(resp => resp.json())
//       .then(console.log)
//   }
//   console.log(props);
//
//   return (
//     <div className="App">
//       <NavBar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/login" component={Login} handleSubmit={onLogin}/>
//       </Switch>
//     </div>
//
//   );
// }

export default withRouter(App);
