import React, { Component } from 'react';
import axios from 'axios';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      isAuthenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post('https://damp-fortress-54104.herokuapp.com/login', body).then(
      (response) => {
        this.setState({ isAuthenticated: true });
        this.getUserInfo(response.data.token);
      }
    ).catch((error) => {
      if (error.response.status === 401) {
        this.setState({ errorMessage: 'Invalid credentials' });
      }
    });
  }

  getUserInfo(token) {
    const headers = { Authorization: token };
    axios.get('https://damp-fortress-54104.herokuapp.com/user_info', { headers });
  }

  render() {
    return (
      <div className="LoginView">
        {this.state.isAuthenticated ? (
          <h1>Welcome!</h1>
        ) : (
          <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          />
          <label>Password</label>
          <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
          <button type="submit">Login</button>
          </form>
        )}
        {this.state.errorMessage && (
          <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default LoginView;
