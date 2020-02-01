import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class ToDos extends Component {
    render() {
        return this.props.todos.map((todo) => (
    
        <TodoItem key={todo.id} delTodo = { this.props.delTodo} todo = {todo} markComplete={this.props.markComplete}/>
        ) );
    }
}

//PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
