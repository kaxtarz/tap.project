import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import About from './components/pages/About';
import ConsultantTable from './components/pages/ConsultantTable';
import AddTodo from './components/AddTodo';
import ClientTable from './components/ClientTable'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';

/*
This is where everything gets put to render + where you can hard code things
*/


class App extends Component {
  state = {
    //here we can hard code to display
    todos: [
      {
        id: uuidv4(),
        title: 'NBC Studios',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'SnapAV',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'On-Deck',
        completed: false,
      },
    ],
  };

  //api request to jsonplaceholder to display mock data
  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((res) => this.setState({ todos: res.data }));
  // }

  //Toggole Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
            <Route path='/consultants' component={ConsultantTable} />
            <Route path='/clients' component={ClientTable} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
