import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(err => console.error('Error!', err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(res => res.json())
      .then(data => {
        this.setState({
          todos: this.state.todos.concat(data)
        });
      });

  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const index = this.state.todos.findIndex(todo => todo.todoId === todoId);
    const targetIndex = this.state.todos[index];
    const updateTodo = { isCompleted: !targetIndex.isCompleted };

    fetch(`/api/todos/${todoId}`, {
      method: 'patch',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTodo)
    })
      .then(response => response.json())
      .then(data => {
        const newTodo = [...this.state.todos];

        this.setState({
          todos: newTodo
        });
      })
      .catch(err => console.error('Error!', err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
