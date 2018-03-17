import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarListItem from './CarListItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoggedIn: false,
      friends: [ 'John','Mary','Bob','John' ],
      cars: [
        {
          brand: 'Toyota',
          make: 'Corolla',
          year: 2015,
          imageUrl: 'http://s3.caradvice.com.au/thumb/1000/562/wp-content/uploads/2015/06/2015-toyota-corolla-zr-4.jpg',
          price: 19200,
          new: false
        },
        {
          brand: 'Honda',
          make: 'Civic',
          year: 2016,
          imageUrl: 'https://cars.usnews.com/static/images/Auto/izmo/i2314304/2016_honda_civic_angularrear.jpg',
          price: 21600,
          new: false
        },
        {
          brand: 'Ford',
          make: 'Mustang',
          year: 2008,
          imageUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAB80FOC051B0101.jpg',
          price: 13600,
          new: false
        },
        {
          brand: 'Mercedes Benz',
          make: 'C-Class C43',
          year: 2017,
          imageUrl: 'https://61571e67bd8f1f6acb1a-642f5177af5aebf9ccc5072ad2e9ac32.ssl.cf1.rackcdn.com/WDDWJ6EB0HF469169/b101c9f787e7c70c0803a02b2210783a.jpg',
          price: 68000,
          new: true
        },
        {
          brand: 'Tesla',
          make: 'Model X',
          year: 2017,
          imageUrl: 'https://cnet4.cbsistatic.com/img/3-14WgVgrMGZ_pKcAqsefdLScJc=/830x467/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg',
          price: 130000,
          new: true
        }
      ]
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    let friendElements = [];
    for (let i = 0; i < this.state.friends.length; i++) {
      friendElements.push(
        <li key={i}>{this.state.friends[i]}</li>        
      );
    }
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>My Conditional Application</h1>
          
    //       <p>By Jessica</p>
    //     </div>
    //   );
    // } else { 
    //   return (
    //     <div>
    //       <h1>My Conditional Application</h1>
    //       <p>By Jessica</p>
    //     </div>
    //   );
    // }


    // let myView;
    // if (this.state.isLoggedIn) {
    //   myView = (
    //     <div>
    //       <p>Welcome!</p>
    //       <button onClick={this.handleLogoutClick}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   myView = (
    //     <button onClick={this.handleLoginClick}>Login</button>
    //   );
    // }

      // <div>
      //   <h1>My Conditional Application</h1>          
      //   {myView}
      //   <p>By Jessica</p>
      // </div>

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Conditional App</h1>
        </header>
        {
          // myView
          this.state.isLoggedIn ? (
            <div>
              <p>Welcome!</p>
              <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
          ) : (
            <div>
              <br />
              <button onClick={this.handleLoginClick}>Login</button>
            </div>
          )
        }
        {
          //Javascript funkiness
          // returns the component only if first condition true (=== "if (this.state.isLoggedIn { ... }""))
          this.state.isLoggedIn && (
            <p>By Jessica</p>
          )
        }

        <ol>
          {friendElements}
        </ol>

        <ol>
          {this.state.friends.map((friend, index) => {
            return (
              <li key={index}>{friend}</li>
            );
          })}
        </ol>

        <CarListItem
          cars={this.state.cars}
        />
      </div>
    );
  }
}

export default App;
