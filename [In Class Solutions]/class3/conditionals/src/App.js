import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  handleClickLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleClickLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
  //   if (this.state.isLoggedIn) {
  //     return (
  //       <div>
  //         <h1>My Conditional Application</h1>
  //         <p>Welcome!</p>
  //         <button onClick={this.handleClickLogout}>Logout</button>
  //         <p>by Daniel</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>My Conditional Application</h1>
  //         <button onClick={this.handleClickLogin}>Login</button>
  //         <p>by Daniel</p>
  //       </div>
  //     );
  //   }
  // }
    // let myView;
    // if (this.state.isLoggedIn) {
    //   myView = (
    //     <div>
    //       <p>Welcome!</p>
    //       <button onClick={this.handleClickLogout}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   myView = (
    //     <button onClick={this.handleClickLogin}>Login</button>
    //   );
    // }
    return (
      <div>
        <h1>My Conditional Application</h1>
        { /* condition ? true : false; */}
        {this.state.isLoggedIn === '' ? (
          <div>
            <p>Welcome!</p>
            <button onClick={this.handleClickLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={this.handleClickLogin}>Login</button>
        )}
        {this.state.isLoggedIn && (
          <p>by Daniel</p>
        )}
      </div>
    );
  }
}

export default App;
