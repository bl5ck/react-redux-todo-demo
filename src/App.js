import React, { Component } from 'react';
import './App.css';
import TodoOverview from './containers/TodoOverview';
import TodoList from './containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Todos App</h3>
              <h6 className="card-subtitle mb-2 text-muted">
                Using React & Redux
              </h6>
              <TodoOverview />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
