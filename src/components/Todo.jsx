import React from 'react';

class Todo extends React.Component {
  render() {
    const status = ['.','x','>','?'];
    const index = this.props.status;
    const todoStatus = status[index];

    return(
      <div>
        <div>{todoStatus}</div>
        <div>{this.props.contents}</div>
      </div>
    )
  }

}

Todo.propTypes = {
  status: React.PropTypes.number.isRequired,
  contents: React.PropTypes.string.isRequired
}

export default Todo;