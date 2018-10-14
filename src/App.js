import React, { Component } from 'react';

import CreateIssueComponent from './Components/CreateIssue';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bug Tracker</h1>
        </header>
        <CreateIssueComponent />
      </div>
    );
  }
}

export default App;
