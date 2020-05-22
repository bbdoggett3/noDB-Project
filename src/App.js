import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    books: []
  }
}


  render() {
    return (
      <div className="App">
        <Header />
        
      </div>
    );
  }
 
}

export default App;
