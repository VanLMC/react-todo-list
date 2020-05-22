import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Todos extends Component{


    render(){
        
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ))
}
}

//proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;