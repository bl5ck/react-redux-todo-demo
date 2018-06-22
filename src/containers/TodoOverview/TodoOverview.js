import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { removeTodos } from '../../ducks/todo.duck';
class TodoOverview extends React.Component {
  clearTodos = () => {
    const { removeTodos } = this.props;
    removeTodos();
  };
  render() {
    const { lastUpdate, todos } = this.props;
    return (
      <div>
        <p className="text-right">
          <span className="badge badge-secondary">
            Last Update:{' '}
            {!lastUpdate ? null : moment(lastUpdate).format('HH:mm:ss A')} |
            Total items: {todos.length}
          </span>
        </p>
        <button className="btn btn-primary" onClick={this.clearTodos}>
          Delete All
        </button>
      </div>
    );
  }
}
export default connect(
  ({ lastUpdate, todos }) => ({ lastUpdate, todos }),
  { removeTodos }
)(TodoOverview);
