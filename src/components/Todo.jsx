import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    }
  }

  render() {
    const status = ['.','x','>','?'];
    const index = this.state.status;
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