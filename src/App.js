import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import ClientTable from './components/ClientTable'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

/*
This is where everything gets put to render + where you can hard code things
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

      data: {},
      
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
  }
  
  //api request to jsonplaceholder to display mock data
  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/ConradT101/tapdb/db')
      .then((res) => this.setState({ data: res.data }));
  }

  //Toggle Complete
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
    console.log(this.state.data);
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
            <Route path='/client' render={ (props) => <ClientTable {...props}  clients={this.state.data.Client} />}/>
          </div>
        </div>
      </Router>
    );
  }
}
