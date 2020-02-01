import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './components/pages/About'
import ToDos from './components/ToDos.js'
import Header from './components/Layout/Header.js'
import AddTodo from './components/AddTodo.js'
//import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    ToDos: []
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(resp => this.setState({ToDos: resp.data}))
  }  

// Toggles complete prop in state  
  markComplete = (id) => {
    this.setState({ToDos: this.state.ToDos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })});
  }


// Deletes Todo
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/$ {id}`)
    .then(resp => this.setState({ToDos: [...this.state.ToDos.filter(todo => todo.id !== id)]}))
}

// Add todo
AddTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(resp => this.setState({ToDos: [...this.state.ToDos, resp.data]}));
  ;
}

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo}/>
                <ToDos delTodo={this.delTodo} todos={this.state.ToDos} markComplete={this.markComplete}/>
              </React.Fragment>
            )} />

            <Route path="/About" component={About}/>
            </div>
        </div>
      </Router>
    );
}
}

export default App;
