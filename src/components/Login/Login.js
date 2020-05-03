import React from "react";
import "../Login/Login.scss";
import { Redirect } from 'react-router-dom';



class Login extends React.Component {
  state = {
    name: null,
    password: null,
}

setValue = (property, value) => {
    this.setState({
        [property]: value
    })
}

login = () => {
    
    const postOptions = {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
          tenant: "uitest",
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password,
          
        }),
      };

      fetch("https://api.esch.pl/api/auth/login", postOptions).then(
        <Redirect to="/courses" />
      )
    }
  render() {
    return (
      <div className="log-form">
      <h2>Login to your account</h2>
      <form>
        <input type="text" title="username" placeholder="username" onChange={event => {this.setValue('name', event.target.value)}}/>
        <input type="password" title="password" placeholder="password" onChange={event => {this.setValue('password', event.target.value)}}/>
        <button type="submit" class="btn" onClick={this.login}>Login</button>
        
      </form>
    </div>
    )
}

}
export default Login;

