import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecomerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
