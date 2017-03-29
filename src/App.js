import React, { Component } from 'react';
// import logo from './me.jpg';
import './App.css';
import Header from './components/Header';
// import CategoriesList from './components/CategoriesList';
// import IndividualCategory from './components/IndividualCategory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
		{this.props.children} 
      </div>
    );
  }
}

export default App;
