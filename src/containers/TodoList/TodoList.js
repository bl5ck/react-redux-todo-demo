import React from 'react';
import { removeTodo, toggleTodo, addTodo } from '../../ducks/todo.duck';
import { connect } from 'react-redux';
import './todoList.css';
class TodoList extends React.Component {
  state = {
    model: {
      id: 0,
      description: '',
      responsible: '',
      priority: 'low',
      isCompleted: false
    }
  };
  onSubmit = () => {
    this.props.addTodo(this.state.model);
  };
  toggleTodo = todo => {
    this.props.toggleTodo(todo.id);
  };
  removeTodo = todo => {
    this.props.removeTodo(todo.id);
  };
  onChange = (name, value) => {
    this.setState({
      model: {
        ...this.state.model,
        [name]: value
      }
    });
  };
  getBadge = todo => {
    switch (todo.priority) {
      case 'low':
        return <span className="badge badge-success">Low</span>;
      case 'medium':
        return <span className="badge badge-warning">Medium</span>;
      case 'high':
        return <span className="badge badge-danger">High</span>;
      default:
        return null;
    }
  };
  render() {
    const { todos } = this.props;
    const {
      model: { description, responsible, priority }
    } = this.state;
    return (
      <div>
        <h6>Create Todo:</h6>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          <div className="form-row">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                id="description"
                name="description"
                defaultValue={description}
                onChange={e => this.onChange('description', e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Responsible"
                id="responsible"
                name="responsible"
                defaultValue={responsible}
                onChange={e => this.onChange('responsible', e.target.value)}
              />
            </div>
            <div className="col-auto">
              <select
                className="form-control"
                id="priority"
                name="priority"
                defaultValue={priority}
                onChange={e => this.onChange('priority', e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
        <br />
        <h6>Todos List:</h6>
        {!todos || !todos.length ? null : (
          <table className="table">
            <thead className="thead-inverse">
              <tr>
                <th>#</th>
                <th>Todo Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <td>
                    <span
                      onClick={() => this.toggleTodo(todo)}
                      className={!todo.isCompleted ? '' : 'completed'}
                    >
                      {todo.id}
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => this.toggleTodo(todo)}
                      className={!todo.isCompleted ? '' : 'completed'}
                    >
                      {todo.description}
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => this.toggleTodo(todo)}
                      className={!todo.isCompleted ? '' : 'completed'}
                    >
                      {todo.responsible}
                    </span>
                  </td>
                  <td>{this.getBadge(todo)}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.removeTodo(todo)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default connect(
  ({ todos }) => ({ todos }),
  {
    addTodo,
    toggleTodo,
    removeTodo
  }
)(TodoList);
